# README
## Connect to AWS EMR Instance with Spark
1. Download our aws key `stocks-key.pem`. The key is sometimes renamed to `stocks-key.pem.txt`, so make sure to rename it back with just the extension `.pem`.
2. Copy the key to the ~/.ssh folder.
```
cp stocks-key.pem ~/.ssh
```
3. The key must not be publicly viewable for ssh to work.
```
chmod 400 ~/.ssh/stocks-key.pem
```
4. Add your current IP address to the list of accepted connections.
  * Go to the [instance console](https://us-west-2.console.aws.amazon.com/elasticmapreduce/home?region=us-west-2#cluster-details:j-2889D5UKY0E5L).
  * Under **Security and Access**, click on the value for **Security groups for Master**.
  * Click on the **ElasticMapReduce-master** group.
  * Click the **Actions** drop down and **Edit inbound rules**.
  * Add a rule with **Type**: SSH, **Port Range**: 22, and **Source** My IP.
  * **NOTE:** You will have to do Step 4 every time your IP address changes.
5. Go back to the [instance console](https://us-west-2.console.aws.amazon.com/elasticmapreduce/home?region=us-west-2#cluster-details:j-2889D5UKY0E5L) and click on the **SSH** beside the **Master public DNS** to view the instructions to connect via SSH using Mac/Linux or Windows. If connecting via Mac/Linux, make sure to change the location of the key for the ssh command.
```
ssh -i ~/.ssh/stocks-key.pem hadoop@ec2-34-210-51-235.us-west-2.compute.amazonaws.com
```
