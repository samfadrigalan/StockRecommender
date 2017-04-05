# Get Stock Data
This folder contains scripts to categorically get stock data from the Yahoo Finance API. Collected data is meant for further processing.
## Running Scripts
1. `cd` into the GetStockData directory.
2. Make the scripts executable by running `chmod u+x bin/*`.
3. Run any script by using `bin/<scriptname>` syntax.
## Syntax for getting Yahoo Finance stock data
The scripts for getting data from yahoo finance contains the basic url api `http://chart.finance.yahoo.com/table.csv?s=$ticker&a=3&b=5&c=2012&d=3&e=5&f=2017&g=w&ignore=.csv`. This [StackOverflow answer](http://stackoverflow.com/a/2152127) details the Yahoo Finance api url parameters.
