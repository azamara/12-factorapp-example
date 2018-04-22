# nodejs

## Docker

### Build
```
$ ./tasks/build-docker.sh
```

### Run
```
$ docker run -d -p 18081:80 --link chicken --link steak --link shimp 12-factorapp-wow/nginx:1.0.0
```