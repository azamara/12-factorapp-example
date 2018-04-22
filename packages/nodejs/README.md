# nodejs

## Docker

### Build
```
$ ./tasks/build-docker.sh
```

### Run
```
$ docker run -d -e "SERVER_NAME=chichen" --name=chicken 12-factorapp-wow/nodejs:1.0.0
$ docker run -d -e "SERVER_NAME=steak" --name=steak 12-factorapp-wow/nodejs:1.0.0
$ docker run -d -e "SERVER_NAME=shimp" --name=shimp 12-factorapp-wow/nodejs:1.0.0
```
