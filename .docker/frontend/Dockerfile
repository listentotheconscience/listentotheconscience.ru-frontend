FROM node:alpine as build

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci --silent
COPY . ./
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]