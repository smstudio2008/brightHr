FROM node:8-jessie

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY .  /usr/src/app
RUN npm install
RUN npm rebuild node-sass --force

CMD ng serve --host 0.0.0.0 --port 4500