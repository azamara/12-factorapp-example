const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL;
const IMAGE_PROXY_PORT = process.env.IMAGE_PROXY_PORT || 8080;
const proxyBaseImageUrl = BASE_IMAGE_URL
  ? proxy(BASE_IMAGE_URL, {
    proxyReqPathResolver: function(req) {
      const newPath = `${BASE_IMAGE_URL}${req.path}`;
      console.log(newPath);

      return newPath;
    }
  })
  : express.static(path.join(__dirname, 'public/assets/images'));

const app = express();

app.use('/images', proxyBaseImageUrl);

app.listen(IMAGE_PROXY_PORT);