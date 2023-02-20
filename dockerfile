FROM node:19 as base

WORKDIR /home/node/app

COPY package*.json .

RUN npm i

CMD ["tail", "-f", "/dev/null"]
