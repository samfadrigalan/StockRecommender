var express = require('express');
var app = express();

var Twit = require('twit');

var T = new Twit({
    consumer_key:         '8vwFmc4QCmB8CaVfQX5PmcPIY',
    consumer_secret:      'h9guqw7wG8QbhSTC7bRcodzhLwAx5Mv1XAIqi9SGtelNBukaDG',
    access_token:         '851168200914063360-wgqVFoFGsQeauyYceLQcSXvGRZFYB94',
    access_token_secret:  'Yw6YlBu8Zxbisj5VfBvRbGx5v0lLtD2AgSiSiv3dcALOy',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
app.get('/twit', function(req, res) {
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
        res.json(data);
    })
});


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
