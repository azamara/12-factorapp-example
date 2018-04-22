# Image Proxy

## Development
### Run local server
```
$ node index.js
> http://localhost:8080/images/arthas.gif
```

### Run local server with env
```
$ BASE_IMAGE_URL=https://bnetcmsus-a.akamaihd.net/cms/blog_header node index.js
> http://localhost:8080/images/FETEC6CNTPU11331915405848.jpg
```

## Docker

### Build
```
$ ./tasks/build-docker.sh
```

### Run
```
$ docker-compose up -d app
```

### Log
```
$ docker ps
$ docker logs -f imageproxy_app_1
```