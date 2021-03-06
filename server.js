// Imports

const express = require('express');
const bp = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

const fs = require('fs');
const multer = require('multer');

// Config

const app = express();

const filename = (req, file, cb) => cb(null, file.originalname);
const destination = (req, file, cb) => cb(null, 'uploads/'); 

const storage = multer.diskStorage({filename, destination});
const upload = multer({ storage: storage, limits: {fileSize: 50*1024*1024} });

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const photoBucket = 'studiomaster.photo.bucket';
const audioBucket = 'studiomaster.audio.bucket';

const mysql = require('mysql');
const credentials = require('./mysqlconnection');

app.use(session({ 

    secret: credentials.session,
    cookie: {secure: false},
    saveUninitialized: true,
    resave: false

}));

app.use(bp.json({limit: '30mb'}));



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

                    console.log(user[0])
                    const info = {
                        imageURL: user[0].imageURL,
                        userName: user[0].userName
                    };

                    con.query(`SELECT Tracks_id FROM favorites WHERE (users_id = ${user[0].id})`, (err, tracks_id) => {
                        if(err) res.json(err);
                        else {
                            info['favoriteTracks'] =  tracks_id;
                            
                            res.json({
                                id: req.session.loggedInUser,
                                info
                            });
                        }
                    })
                    

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
    con.query(`SELECT users.id, users.userName, users.description, users.imageURL FROM users WHERE(id = ${req.params.id})`, (err, user) => {
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
    const photo = fs.readFileSync('./' + req.file.path);
    
    s3.upload({Bucket: photoBucket, Key: Date.now() + req.file.originalname, Body: photo, ACL: 'public-read'}, (err, data) => {
        if (err) console.log(err);
        if (data) 
        {
            // console.log(data);
            con.query(`UPDATE users SET imageURL = '${data.Location}' WHERE(id = ${req.body.id});`, (err, result) => {
                if(err) console.log(err);
                // if(result) console.log(result);
                fs.unlinkSync(req.file.path); // delete file from local storage.
                res.json('success')
            })
        }
    });
})

//TRACKS//

app.post('/newTrack', upload.single('track'), (req, res) => {
    const track = fs.readFileSync('./' + req.file.path);

    console.log(req.body);
    console.log(req.file);

    s3.upload({Bucket: audioBucket, Key: Date.now() + req.file.originalname, Body: track, ACL: 'public-read'}, (err, data) => {
        if (err) console.log(err);
        if (data) 
        {
            // console.log(data);
            con.query(`Insert into Tracks (trackTitle, trackDescription, trackURL, coverURL, created_at, updated_at, user_id, listens) VALUES ('${req.body.title}', '${req.body.description ? req.body.description : null}', '${data.Location}', null, now(), now(), '${req.body.id}', 0);`, (err, result) => {
                if(err) console.log(err);
                // if(result) console.log(result);
                fs.unlinkSync(req.file.path); // delete file from local storage.
            })
        }
    });
})

app.post('/deleteTracks/:id', (req, res) => {

    const id = req.params.id;

    const tracks = req.body.tracks ? req.body.tracks : null;

    if(tracks){
        let query = ''
        for (let idx = 0; idx < tracks.length; idx++){
            query += tracks[idx];
            if(idx !== tracks.length - 1) query += ','
        }
        con.query(`SELECT trackUrl from Tracks WHERE id IN (${query})`, (err, tracksToDelete) => {
            if(err) console.log(err);

            if(tracksToDelete) {
                let keys = []
                
                for(let idx = 0; idx < tracksToDelete.length; idx++){
                    keys.push({Key: tracksToDelete[idx].trackUrl})
                }
                let params = {
                    Bucket: audioBucket,
                    Delete: {
                        Objects: keys
                    } 
                }

                s3.deleteObjects(params, (err, data) => {
                    if (err) console.log(err);
                    else {
                        console.log(data);
                        con.query(`DELETE FROM Tracks WHERE id IN (${query});`, (err, success) => {
                            if(err) console.log (err);
                            if (success) {
                                con.query(`SELECT * FROM Tracks WHERE (user_id = ${id})`)
                            };
                        })
                    }
                })
            }
        })
    }
})

//ALBUMS//

app.post('/newAlbum', (req,res) => {
    const tracks = req.body.tracks;
    const albumName = req.body.name;
    const albumDesc = req.body.desc;
    const id = req.body.id;

    console.log(tracks);
    console.log(albumName);

    con.query(`INSERT INTO albums (albumName, albumDesc, created_at, updated_at, user_id) VALUES ('${albumName}', '${albumDesc ? albumDesc : "No description provided"}', now(), now(), ${id})`, (err, album) => {
        if(err) console.log(err);

        else{
            console.log(album);
            let query = '';
            for (let idx = 0; idx < tracks.length; idx++){
                query += `(${tracks[idx]}, ${album.insertId})`
                if(idx !== tracks.length - 1) query += ', '
            }

            con.query(`INSERT INTO album_tracks (Tracks_id, albums_id) VALUES ${query};`, (err, result) => {
                if(err) console.log(err);
                else console.log(result);
            })

        }
    })

    
})


app.post('/setArtistInfo', (req, res) => {
    console.log(req.session.loggedInUser);
    console.log(req.body);
    let descFlag = false, genreFlag = false, instrumentFlag = false, responseObj = {};

    // Check to see if a description was sent through. If so, update the user description in DB, if not, pass.
    if(req.body.description){
        con.query(`UPDATE users SET description = '${req.body.description}' WHERE(id = ${req.session.loggedInUser});`, (err, user) => {
            if(err) res.json(err);
            if(user){
                responseObj['user'] = user;
                descFlag = true;
            };
        })
    
    }
    else{
        descFlag = true;
    }

    //If genres were sent through, build out a quqery string. Create rows for each genre passed through. If no genres, pass

    if(req.body.genres){
        let values = ''
        for(let idx = 0; idx < req.body.genres.length; idx++){
            
            values += `(${req.session.loggedInUser}, ${req.body.genres[idx].id})`;

            if(idx !== req.body.genres.length - 1) values += ', ';
        }
        con.query(`INSERT INTO user_genres (users_id, genresCSV_id) VALUES ${values};`, (err, genres) => {
            if(err) console.log(err);
            if(genres) {
                responseObj['genres'] = genres;
                genreFlag = true;
            }
        })
    }

    else{
        genreFlag = true;
    }

    //If instruments were sent through, build out a query string. Create rows for each instrument passed through. If no instruments, pass

    if(req.body.instruments){
        let values = ''
        for(let idx = 0; idx < req.body.instruments.length; idx++){
            
            values += `(${req.session.loggedInUser}, ${req.body.instruments[idx].id})`;

            if(idx !== req.body.instruments.length - 1) values += ', ';
        }
        con.query(`INSERT INTO user_instruments (users_id, instrumentsCSV_id) VALUES ${values};`, (err, instruments) => {
            if(err) console.log(err);
            if(instruments){
                responseObj['instruments'] = instruments;
                instrumentFlag = true;
            }
        })
    }
    else{
        instrumentFlag = true;
    }

    //Make sure each operation has had a chance to fire if values were passed through.

    if(descFlag && genreFlag && instrumentFlag){
        res.json(responseObj);
    }
})

//Track Fetching Routes

 app.get('/fetchProfileTracks/:id', (req,res) => {
    con.query(`Select Tracks.*, users.userName from Tracks join users on Tracks.user_id = users.id WHERE (Tracks.user_id = ${req.params.id}) ORDER BY Tracks.created_at DESC LIMIT 0,9;`, (err, tracks) => {
        if(err) console.log(err);
        if(tracks) {
            res.json( {tracks} )
        }
    })
})

app.get('/fetchAllTracks/:id', (req,res) => {
    con.query(`Select Tracks.*, users.userName from Tracks join users on Tracks.user_id = users.id WHERE (Tracks.user_id = ${req.params.id}) ORDER BY Tracks.created_at DESC LIMIT 0,100;`, (err, tracks) => {
        if(err) console.log(err);
        if(tracks){
            res.json( {tracks} )
        }
    })
})

app.get('/fetchProfileGenresInstruments/:id/:limit', (req,res) => {
    let responseObj = {}, limit = req.params.limit;
    con.query(`SELECT genresCSV.* FROM genresCSV INNER JOIN user_genres on genresCSV.id = user_genres.genresCSV_id WHERE(user_genres.users_id = ${req.params.id})${limit !== 0 ? " limit " + limit : ""};`, (err, genres) => {
        if (err) console.log(err);
        if (genres) {
            responseObj['genres'] = genres;

            con.query(`SELECT instrumentsCSV.* FROM instrumentsCSV INNER JOIN user_instruments on instrumentsCSV.id = user_instruments.instrumentsCSV_id WHERE(user_instruments.users_id = ${req.params.id})${limit !== 0 ? " limit " + limit : ""};`, (err, instruments) => {
                if(err) console.log(err);
                if(instruments){
                    responseObj['instruments'] = instruments;
    
                    res.json(responseObj);
                }
            });
        }

    });
} )

app.get('/fetchAlbums/:id', (req,res) => {
    const id = req.params.id;

    con.query(`SELECT * FROM albums WHERE (user_id = ${id});`, (err, albums) => {
        if(err) console.log(err);
        else {
            console.log(albums);
            res.json({albums});   
        }
    })
})

app.post('/addFavorite', (req, res) => {
    const id = req.body.id;
    const track = req.body.track;

    con.query(`INSERT INTO favorites (Tracks_id, user_id) VALUES (${track}, ${id});`, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
    })
})

app.get('/instrumentsAndGenres', (req,res) =>{
    const instAndGenreLists = {};
    con.query('select * from instrumentsCSV', (err, instruments) => {

        if(err) res.json(err);
        if(instruments){
            instAndGenreLists['instrumentList'] = instruments;
            con.query('select * from genresCSV', (err, genres) => {
                if(err) res.json(err);
                if(genres) {
                    instAndGenreLists['genreList'] = genres;
                    res.json(instAndGenreLists);
                }    
            })
            
        }
    })
})


app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html') );
})

app.listen(port ,function(){
    console.log("listening on ", port)
})