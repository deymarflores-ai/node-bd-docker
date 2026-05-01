FROM node:22

WORKDIR /app

copy package*.json ./

run npm install

copy . . 

expose 3000

cmd ["node", "src/index.js"]
