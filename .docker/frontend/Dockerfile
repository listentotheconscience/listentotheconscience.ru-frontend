FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY app/package.json ./
COPY app/package-lock.json ./

RUN npm ci --silent
COPY . ./
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]