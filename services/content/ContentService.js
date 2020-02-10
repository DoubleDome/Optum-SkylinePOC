var express = require('express');
var router = express.Router();

router.get('/patient', function(req, res) {
  res.json(require('./data/homepage-patient.json'));
});

router.get('/caregiver', function(req, res) {
  res.json(require('./data/homepage-caregiver.json'));
});

router.get('/template/:template', function(req, res){
  res.json(require(`./templates/${req.params.template}.json`))
});

module.exports = router;
