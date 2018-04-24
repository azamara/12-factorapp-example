# nodejs

## Docker

### Build
```
$ ./tasks/build-docker.sh
```

### Run
```
$ docker run --restart always --name test1 12-factorapp-example/ha:1.0.0
$ docker-compose up --scale helloworld=3
```
