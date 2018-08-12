exports.login = function(req, res) {
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
                }
