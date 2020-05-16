const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  return res.render('index');
});

router.get('/wiki/:id', function(req, res) {
  return res.render('page');
});

router.get('/create', function(req, res) {
  return res.render('create');
});

module.exports = router;
