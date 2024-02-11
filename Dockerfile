FROM node:21-alpine as BUILD_IMAGE

WORKDIR /app/react-app


COPY package.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

RUN npm run build

FROM node:21-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

EXPOSE 8080


COPY package.json .
COPY vite.config.js .

RUN npm install javascript

EXPOSE 8080

ENTRYPOINT ["nodemon", "/app/react-app/server/index.js"]
CMD ["npm","run","preview"]