// Imports

const express = require('express');
const bp = require('body-parser');
const path = require('path');
const cors = require("cors");
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

const fs = require('fs');
const multer = require('multer');

const filename = (req, file, cb) => cb(null, file.originalname);
const destination = (req, file, cb) => cb(null, 'uploads/'); 

// const storage = multer.diskStorage({
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     },
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//       }
// })

const storage = multer.diskStorage({filename, destination});
const upload = multer({ storage });

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const photoBucket = 'studiomaster.photo.bucket';
const audioBucket = 'studiomaster.audio.bucket';


// s3.upload({Bucket: photoBucket, Key: , Body: 'Hello'}, (err, data) => {
//     if (err) console.log(err);
//     if (data) console.log(data);
// })

const mysql = require('mysql');
const credentials = require('./mysqlconnection');

// Config

const app = express();

app.use(session({ 

    secret: credentials.session,
    cookie: {secure: false},
    saveUninitialized: true,
    resave: false

}));

app.use(bp.json());



app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Other origins allowed to connect
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, PATCH, DELETE"); // Methods allowed from allowed origins
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type"); // Specific request headers to be allowed
    res.setHeader("Access-Control-Allow-Credentials", true); // Since this app has session, allow credentials

    next(); // Pass onto next middleware
});




const saltRounds = 10;

const con = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    port: credentials.port,
    database: credentials.database
});

app.use(express.static(`${__dirname}/build`) );

const port = process.env.port || 8080


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//While creating an account, this route queries for an email entry to see if available IF post passes email validation.

app.post('/checkEmail', (req,res) => {
    if(req.body.email && req.body.email.length) {
       if(validateEmail(req.body.email)) {
           con.query(`SELECT * FROM users where(emailAddress = '${req.body.email}')`, (err, user) => {

            if(err) console.log(err);

            if(user.length) {
                res.json(false);
            }

            else{
                res.json(true)
            }

           })
       }
    }
})

// While creating an account, this route queries for a username to see if available

app.post('/checkUsername', (req,res) => {
    if(req.body.username && req.body.username.length) {
           con.query(`SELECT * FROM users where(userName = '${req.body.username}')`, (err, user) => {
               
            if(err) console.log(err);

            if(user.length) {
                res.json(false);
            }

            else{
                res.json(true)
            }
       });
    }
})

// Accepts new user packet and sends to database

app.post('/newUser', (req,res) => {

    const sub = req.body;

    const securityQuestions = [[sub.securityQuestionOne, sub.securityAnswerOne], [sub.securityQuestionTwo, sub.securityAnswerTwo], [sub.securityQuestionThree, sub.securityAnswerThree]]
    
    const salt = bcrypt.genSaltSync(saltRounds);

    bcrypt.hash(sub.password, salt, null, (err, hash) => {
        

        if(err){
            res.json({error: err});
        }
       
        else {
            
            con.query(`INSERT INTO users (firstName, lastName, birthdate, emailAddress, gender, userName, password, created_at, updated_at) VALUES ('${sub.fName}', '${sub.lName}', '${sub.birthday}', '${sub.email}', '${sub.gender}', '${sub.username}', '${hash}', now(), now());`, (err, response) => {
                if (err) console.log(err);
                if (response) {
                    con.query(`INSERT INTO address (users_id, cityName, stateName, zipCode, created_at, updated_at) VALUES ('${response.insertId}', '${sub.city}', '${sub.state}', '${sub.zip}', now(), now())`, (err, result) => {
                        if (err) console.log(err);
                        if(result) console.log(result);
                    });
                    for(let idx = 0; idx < securityQuestions.length; idx++) {
                        con.query(`INSERT INTO securityQuestions (users_id, question, answer, created_at, updated_at) VALUES ('${response.insertId}', '${securityQuestions[idx][0]}', '${securityQuestions[idx][1]}', now(), now())`, (err, result) => {
                            if (err) console.log(err);
                            if(result) console.log(result);
                        });
                    };
                };
                req.session.loggedInUser = response.insertId;
                req.session.save();
                con.query(`SELECT * FROM users WHERE(id = ${req.session.loggedInUser})`, (err, user) => {
                    if(err) console.log(err);
                    else{
                        res.json({
                            success: "Account created",
                            id: req.session.loggedInUser,
                            info: user[0]
                        })

                    }

                })
            });
        };

    })
})

app.post('/login', (req,res) => {

    con.query(`SELECT * FROM users WHERE(emailAddress = '${req.body.email}')`, (err, user) => {
        if(err) console.log(err);

        if(user) {

            if(!user.length) { //No user by that email
                res.json({
                    noUser: true
                })
            }

            else {
                if(bcrypt.compareSync(req.body.password , user[0].password)) { // if user is found and pw matches save session with userID
                    req.session.loggedInUser = user[0].id;
                    req.session.save();
                    
                    

                    res.json({
                        id: req.session.loggedInUser,
                        info: user[0]
                    });
                }

                else { // if user is found but pw does not match
                    res.json({
                        id: false
                    })
                }
            }
        }
    });
})

app.get('/getAccountInfo/:id', (req, res) => {
    con.query(`SELECT * FROM users WHERE(id = ${req.params.id})`, (err, user) => {
        if(err) console.log(err);

        if(user) {
            res.json(user);
        };
    })
})

app.get('/checkLoginSession', (req, res) => {
    
    if(req.session.loggedInUser) {
        con.query(`SELECT * FROM users WHERE (id = ${req.session.loggedInUser});`, (err, user) => {
            if (err) console.log(err)
            res.json({
                id: req.session.loggedInUser,
                info: user[0]
            });

        })
    }

    else{
        res.json({id: null});
    }

})

app.get('/signoff', (req, res) => {
    req.session.destroy();
    res.json({id: null});
})

app.post('/changePhoto', upload.single('image'), (req,res) => {
    console.log(req.file.path);
    console.log(req.session);
    const photo = fs.readFileSync('./' + req.file.path);
    
    s3.upload({Bucket: photoBucket, Key: Date.now() + req.file.originalname, Body: photo, ACL: 'public-read'}, (err, data) => {
        if (err) console.log(err);
        if (data) 
        {
            console.log(req.session);
            console.log(data);
            // con.query(`UPDATE users SET 'imgURL' = ${data.url} WHERE('id' = ${req.session.id});`)
            // Since we'll have a user id in session at this time, store the returned S3 Entry URL in the SQL DB
        }
    });
})



app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html') );
})

app.listen(port ,function(){
    console.log("listening on ", port)
})