#!/bin/bash
file="ticker_groups/sp500.txt"
lines=`cat $file`
for line in $lines; do
  curl -o sp500_data/$line.csv http://chart.finance.yahoo.com/table.csv?s=$line&a=3&b=5&c=2012&d=3&e=5&f=2017&g=w&ignore=.csv
done
