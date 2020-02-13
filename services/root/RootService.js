var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  res.json(require(`./data/${req.params.id || '047017a4-1e89-46e6-8bea-aff3a94c6010'}.json`));
});

module.exports = router;
