FROM node:8-alpine

WORKDIR /service

COPY . .

RUN yarn install --production

CMD [ "node", "index.js" ]