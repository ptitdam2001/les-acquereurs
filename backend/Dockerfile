FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn add webpack webpack-cli -g && yarn install --production=false --silent
COPY . .
EXPOSE 8888
CMD yarn start:prod