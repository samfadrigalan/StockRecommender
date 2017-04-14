# README
## Connect to AWS Spark Instance
1. Download our aws key `stocks-key.pem`. The key is sometimes renamed to `stocks-key.pem.txt`, so make sure to rename it back with just the extension `.pem`.
2. Copy the key to the ~/.ssh folder.
```
cp stocks-key.pem ~/.ssh
```
3. The key must not be publicly viewable for ssh to work.
```
chmod 400 ~/.ssh/stocks-key.pem
```
