# GoogleTrendsData
This folder contains scripts to get stock data from Google Trends using the [google-trends-api npm package](https://github.com/pat310/google-trends-api).
## Running 
1. Run `npm install` in the `GoogleTrendsData` directory.
2. Run `nodemon app.js` to run the server. 
3. The server will be runnin on `localhost:3000`. 'localhost:3000/twit' will contain the json for the data. 
## Twitter API
The [Twit](https://github.com/ttezel/twit) is used on top of the [Twitter API](https://dev.twitter.com/rest/reference/get/search/tweets).
Refer to the Twitter documentation to change the get request inside `app.js`.