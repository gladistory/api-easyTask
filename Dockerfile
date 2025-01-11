FROM node:latest

WORKDIR /scr

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run dev