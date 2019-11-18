var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/excel', (req, res, next) => {
  res.redirect('/excel');
});

router.get('/excel', (req, res, next) => {
  res.download('./tmp/excel.xlsx');
});

module.exports = router;
