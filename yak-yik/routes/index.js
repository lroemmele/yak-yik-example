var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testcreatezone', function(req, res, next) {
  res.render('testcreatezone', null);
});

router.get('/testcreatecomment', (req, res, next) => {
     res.render('testcreatecomment', null);
});

module.exports = router;
