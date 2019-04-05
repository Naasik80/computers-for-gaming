var express = require('express');
var router = express.Router();
var request = require('request');

// getting the sign-out page
router.get('/', function(req,res,next) {
    
    // sets default
    req.app.locals.login = false;
    req.app.locals.user = "";
    req.app.locals.signIn = "";
    req.app.locals.regError = "";


    // create a cookie
    res.clearCookie('UserId');
    console.log(req.cookies.userId);

    // redirect to home page after sign-out
    res.redirect('/');

});

module.exports = router;