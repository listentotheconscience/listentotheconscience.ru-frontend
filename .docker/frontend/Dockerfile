FROM node:latest

ENV PATH /app/node_modules/.bin:$PATH

COPY app/package.json ./
COPY app/package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

COPY . ./app

CMD ["npm", "start"]