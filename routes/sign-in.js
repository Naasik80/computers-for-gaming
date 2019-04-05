var express = require('express');
var router = express.Router();
var users = require('../db.json');
var request = require('request');


// getting the sign-in page
router.get('/', function(req,res,next) {
    res.render('sign-in', {
        title: "Sign-in",
        thisError: req.app.locals.signInError,
    });
});

// sign-in
router.post('/', function(req,res,next) {

    // get infomation from the body
    var logUser = req.body.username;
    var logPassword = req.body.password;

    for(var i = 0;  i < users.length; i++) {

        // if users and passwords are correct
        if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword) {

            // need to create a cookie
            res.cookie('userId', users[i].Id);

            // sets logUser to the correct username
            logUser = users[i].username;
            console.log(req.cookie);

            // sets the correct sign-in variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signInError = "Log in Success";
            
            // It must redirect to the home page after sign-in
            res.redirect('/');
        }
    };

    // chect that the user is signed in correctly
    if(req.app.locals.user != logUser) {
        req.app.locals.signInError == "Username or Password is Incorrect";    
    };
    res.redirect('/sign-in')
});

module.exports = router;