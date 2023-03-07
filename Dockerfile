FROM node:18.13.0-alpine

# this step is just for run containers on Mac M1 Silicon chip
# if this is not your case, don't run the follow commands belloe
# RUN apk add --update --no-cache make gcc libsass g++
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools
RUN npm i nodemon ts-node -g

WORKDIR /app

EXPOSE 3000

COPY package.json .

COPY package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .




