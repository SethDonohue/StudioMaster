// Imports

const express = require('express');
const bp = require('body-parser');
const path = require('path');
const cors = require("cors");
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

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

const whitelist = ['http://localhost:3000', 'localhost:8080', 'http://www.studiomasterllc.com'];



var corsOptionsDelegate = function (req, callback) {
    var corsOptions = {credentials: true};
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    }else{
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }




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

app.post('/checkEmail', cors(corsOptionsDelegate), (req,res) => {
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

app.post('/checkUsername', cors(corsOptionsDelegate), (req,res) => {
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

app.post('/newUser', cors(corsOptionsDelegate), (req,res) => {

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
                res.json({
                    success: "Account created",
                    id: req.session.loggedInUser
                })
            });
        };

    })
})

app.post('/login', cors(corsOptionsDelegate), (req,res) => {
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

app.get('/getAccountInfo/:id', cors(corsOptionsDelegate), (req, res) => {
    con.query(`SELECT * FROM users WHERE(id = ${req.params.id})`, (err, user) => {
        if(err) console.log(err);

        if(user) {
            res.json(user);
        };
    })
})

app.get('/checkLoginSession', cors(corsOptionsDelegate), (req, res) => {
    console.log(req.session);
    
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

app.get('/signoff', cors(corsOptionsDelegate), (req, res) => {
    req.session.destroy();
    res.json({id: null});
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html') );
})

app.listen(port ,function(){
    console.log("listening on ", port)
})