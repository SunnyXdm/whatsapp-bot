FROM node:20-bullseye

WORKDIR /app

COPY package.json .

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

RUN npm i

RUN apt install ./google-chrome-stable_current_amd64.deb

COPY . .

CMD [ "node", "index.mjs" ]
