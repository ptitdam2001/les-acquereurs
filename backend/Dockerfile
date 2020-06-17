FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY . .
RUN yarn install --production=false --silent
RUN yarn build
# RUN rm -Rf node_modules

EXPOSE 8888
CMD yarn start:prod