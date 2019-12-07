var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/activity/ssg/activity/ssg/api/v1/users/addresses?isMock=true', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/api/swagger', function(req, res, next) {
  res.send('sas');
});


router.get('/api/mock', function(req, res, next) {
  res.send('sasmock');
});


router.get('/api/v1/users/addresses', function(req, res, next) {
  res.send('sas');
});

module.exports = router;