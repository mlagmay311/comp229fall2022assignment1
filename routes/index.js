
// express setup
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'WELCOME TO MY PAGE',
        message: 'Hey! We appreciate you visiting our website. This portfolio website is made with HTML, CSS, JQuery, Javascript, NodeJS, ExpressJS. Remember to checkout this website.'
      });
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects',
        {
            title: 'Projects Page'
        });
});

/* GET AboutMe page. */
router.get('/AboutMe', function(req, res, next) {
    res.render('AboutMe',
        {
            title: 'About Me Page'
        });
});

/* GET ContactMe page. */
router.get('/ContactMe', function(req, res, next) {
    res.render('ContactMe',
        {
            title: 'Contact Me Page'
        });
});

router.get('/Service', function(req, res, next) {
    res.render('Service',
        {
            title: 'Service Page'
        });
});

// make this file public
module.exports = router;
