const express = require('express');
const router = express.Router();


router.post('/about', function (req, res) {
    res.send('About this wiki');
  })

  

module.exports = router;