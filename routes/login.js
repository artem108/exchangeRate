const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

router.post('/', (req, res, next) => {
  const newUser = req.body.user
        newUser.id = 1
  res.json(newUser)
});

module.exports = router;
