FROM node:21-slim

RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli@10.3.2

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

USER node

ENV NODE_OPTIONS=--experimental-global-webcrypto

CMD ["npm", "run", "start:dev"]