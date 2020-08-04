FROM node:14

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000
CMD ["yarn", "start"]
