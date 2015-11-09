'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');

router
  .route('/')

  // get match info
  .get(function(req,res) {
    var region = 'na';
    var matchId = '2002113603';
    request.get({
      // /api/lol/{region}/v2.2/match/{matchId}
      url : 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.2/match/' + matchId + '?api_key=' + process.env.LOL_API_KEY,
      includeTimeline : true

    }, function(err, response, body) {
      //err handling
      if (err) {
        return res.status(500).json(err);
      }
      res.json(JSON.parse(body));
    });
  });

module.exports = router;