FROM node:latest

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3080

CMD ["node", "index.js"]