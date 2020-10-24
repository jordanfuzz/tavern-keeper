FROM mhart/alpine-node:12.16.2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "start"]