# stdout

## Docker

### Build
```
$ ./tasks/build-docker.sh
```

### Run
```
$ docker run -d --name=stdout 12-factorapp-wow/stdout:1.0.0
$ docker exec -it stdout cat /debug.log
```
