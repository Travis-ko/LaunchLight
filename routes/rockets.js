const express = require("express");
const router = express.Router();
const request = require('request');

/* GET rockets listing. */
router.get("/", function(req, res, next) {
  //Request and pipe response of json containing the next 20 launches
  request("https://launchlibrary.net/1.2/launch/next/20").pipe(res);
});

module.exports = router;
