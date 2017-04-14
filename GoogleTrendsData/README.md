# GoogleTrendsData
This folder contains scripts to get stock data from Google Trends using the [google-trends-api npm package](https://github.com/pat310/google-trends-api).
## Running 
1. Run `npm install` in the `GoogleTrendsData` directory.
2. Run `nodemon app.js` to run the server. 
3. The server will be running on `localhost:3000`. 'localhost:3000/trends' will contain the json for the data.
## Google Trends API
The [google-trends-api](https://github.com/pat310/google-trends-api) is used on top of the [Google Trends](https://github.com/pat310/google-trends-api).
Refer to the documentation to change the get request inside `app.js`.
