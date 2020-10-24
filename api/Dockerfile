FROM mhart/alpine-node:12.16.2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --quiet

RUN npm install -g nodemon

COPY . .

EXPOSE 3002

CMD ["node", "./src"]