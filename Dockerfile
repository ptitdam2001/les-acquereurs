# build environment
FROM node:lts-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn global add react-scripts --silent
RUN yarn install --silent
COPY ./frontend .
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY ./frontend/config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]