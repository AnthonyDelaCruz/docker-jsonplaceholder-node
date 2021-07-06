FROM node:lts-alpine

EXPOSE 5000

WORKDIR /app

COPY package.json .

RUN npm install

ADD app.js . 

CMD npm start