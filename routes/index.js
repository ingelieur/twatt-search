const express = require('express');
const router = express.Router();
const Twitter = require('../controllers/searchTwitter');

router.get('/', (req,res) => {
  res.send('Welcome to the simplest twitter api ever');
});

router.post('/search', Twitter.search);

module.exports = router;
