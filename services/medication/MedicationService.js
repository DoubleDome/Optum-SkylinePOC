const express = require('express');
const router = express.Router();
const items = require('./data/medications.json');

router.get('/:id', function(req, res) {
  let result = [];
  items.map(item => {
    if (item.id === req.params.id) {
      result.push(item);
    }
  });
  res.json(result);
});

router.get('/:id/:type', function(req, res) {
    let result = [];
    items.map(item => {
      if (item.id === req.params.id && item.type === req.params.type) {
        result.push(item);
      }
    });
    res.json(result);
});

module.exports = router;
