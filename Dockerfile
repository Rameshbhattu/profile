FROM node:16-bullseye

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --omit=dev --force

COPY . ./

RUN npm install typescript --force
RUN npm run-script build

EXPOSE 3002

CMD [ "npm", "start" ]
