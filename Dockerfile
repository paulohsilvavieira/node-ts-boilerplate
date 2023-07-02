FROM node:18.13.0-alpine

RUN npm i nodemon ts-node -g

WORKDIR /app

EXPOSE 3000
EXPOSE 9228

COPY package.json .

COPY package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .




