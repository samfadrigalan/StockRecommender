var express = require('express');
var app = express();
var fs = require('fs');
var stream = fs.createWriteStream("my_file.csv");

var Twit = require('twit');

var T = new Twit({
    consumer_key:         '8vwFmc4QCmB8CaVfQX5PmcPIY',
    consumer_secret:      'h9guqw7wG8QbhSTC7bRcodzhLwAx5Mv1XAIqi9SGtelNBukaDG',
    access_token:         '851168200914063360-wgqVFoFGsQeauyYceLQcSXvGRZFYB94',
    access_token_secret:  'Yw6YlBu8Zxbisj5VfBvRbGx5v0lLtD2AgSiSiv3dcALOy',
    timeout_ms:           60*10000,  // optional HTTP request timeout to apply to all requests.
});
//stream.once('open', function(fd) {
//    T.get('search/tweets', { q: 'apple since:2011-04-04', count: 1000 }, function(err, data, response) {
//        //console.log(data.statuses[0].created_at);
//        var statuses = data.statuses;
//        if (data.statuses) {
//            for (i=0; i<statuses.length; i++) {
//                stream.write(statuses[i].created_at);
//            }
//        }
//
//        stream.end();
//    });
//});


//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
app.get('/twit', function(req, res) {
    T.get('search/tweets', { q: 'apple since:2017-04-05', count: 1000 }, function(err, data, response) {
        var statuses = data.statuses;
        var twitStat = [];
        if (data.statuses) {
            for (i=0; i<statuses.length; i++) {
                //stream.write(statuses[i].created_at);
                twitStat.push(statuses[i].created_at);
            }
        }
        res.json(twitStat);
    })
});

app.get('/twits', function(req, res) {
    T.get('search/tweets', { q: 'apple since:2017-04-05', count: 1000 }, function(err, data, response) {
        res.json(data);
    })
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
