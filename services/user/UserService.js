var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  res.json(require(`./data/${req.params.id}.json`));
});


module.exports = router;
