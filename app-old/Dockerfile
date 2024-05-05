FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --quiet

COPY . .

EXPOSE 3000

CMD ["bun", "start"]