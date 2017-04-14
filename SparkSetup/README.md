# SparkSetup
## AWS EMR(Elastic Map Reduce) Spark instance
### Connect to master
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
  * Go to the [instance console](https://us-west-2.console.aws.amazon.com/elasticmapreduce/home?region=us-west-2#cluster-details:j-DSGOARB26PVS).
  * Under **Security and Access**, click on the value for **Security groups for Master**.
  * Click on the **ElasticMapReduce-master** group.
  * Click the **Actions** drop down and **Edit inbound rules**.
  * Add a rule with **Type**: SSH, **Port Range**: 22, and **Source**: My IP.
  * **NOTE:** You will have to do Step 4 every time your IP address changes.
5. Go back to the [instance console](https://us-west-2.console.aws.amazon.com/elasticmapreduce/home?region=us-west-2#cluster-details:j-DSGOARB26PVS) and click on the **SSH** beside the **Master public DNS** to view the instructions to connect via SSH using Mac/Linux or Windows. If connecting via Mac/Linux, make sure to access the key at the correct filepath `~/.ssh/stocks-key.pem` for the ssh command.
```
ssh -i ~/.ssh/stocks-key.pem hadoop@ec2-34-209-202-172.us-west-2.compute.amazonaws.com
```
### View Web Interfaces Hosted on AWS EMR
The security group for the master node needs to be modified to be able to view the Web UI. Go to the [EMR instance console](https://us-west-2.console.aws.amazon.com/elasticmapreduce/home?region=us-west-2#cluster-details:j-DSGOARB26PVS) and click on the link for **Security groups for master**. Edit the inbound rules for the master. Add a rule with **Type**: All Traffic and **Source**: My IP. This will enable Web UI viewing for your current IP address. To allow access from any IP address, choose "Any" for **Source**.
#### Web Interfaces URLs
|Name of interface  |URL                                                                |
|:----------------  |:----------------------------------------------------------------- |
|Spark HistoryServer| http://ec2-34-209-202-172.us-west-2.compute.amazonaws.com:18080/  |


For a complete list of URLs, go this [Amazon EMR guide](http://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-web-interfaces.html).
