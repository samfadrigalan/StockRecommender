var express = require('express');
var app = express();
//var fs = require('fs');
//var stream = fs.createWriteStream("my_file.csv");

var googleTrends = require('google-trends-api');
var util = require('util');

/**
 * Date Syntax: new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
 * year - Integer value representing the year
 * month - Begins with 0 for January to 11 for December
 * date - Optional. Integer value representing the day of the month
 */
var START_DATE = new Date(2009, 5, 1);
var END_DATE = new Date(2009, 6, 1);

/**
 * Keyword to query for Google Trends
 */
var KEYWORD = 'Samsung';

/**
 * INTEREST OVER TIME
 * Numbers represent search interest relative to the highest point on the chart for the given region and time.
 * A value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular.
 * Likewise a score of 0 means the term was less than 1% as popular as the peak.'
 */
app.get('/trends', function(req, res) {
    googleTrends.interestOverTime({keyword: KEYWORD, startTime: START_DATE, endTime: END_DATE})
        .then(function(response) {
            res.send(response);
        })
        .catch(function(err) {
            console.log('got the error', err);
            console.log('error message', err.message);
            console.log('request body',  err.requestBody);
        });
});


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
