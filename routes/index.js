var express = require('express');
var router = express.Router();
var thing = require('../db.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mine',
    name: 'Naasik',
    blogs: thing,
   });
});

// router.get('/', function (req, res, next) {

//   let data = {
//       title: 'PC Gaming',
//       gaming: Gaming, 
//       message: false,
//   }

//   res.render('index', data);

// });

module.exports = router;
