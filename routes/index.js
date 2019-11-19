const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/downloadExcel', (req, res, next) => {
  const excelFilePath = path.join(__dirname, '../tmp/excel.xlsx');
  res.sendFile(excelFilePath, (err) => {
    if (err) console.log(err);
  });
});

module.exports = router;
