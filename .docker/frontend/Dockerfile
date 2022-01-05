FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY app/package.json ./
COPY app/package-lock.json ./

COPY . ./app

RUN yarn
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]