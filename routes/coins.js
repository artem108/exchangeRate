const express = require('express')
const router = express.Router()
const https = require('https')

router.get('/', (req, res, next) => {
  https.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', resp => {
      let data = ''

      resp.on('data', chunk => {
        data += chunk
      });

      resp.on('end', () => {
          res.json(JSON.parse(data))
      });

    }).on("error", err => {
        res.status(404).json(err)
    })
})

module.exports = router
