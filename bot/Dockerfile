FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --quiet

COPY . .

CMD ["bun run", "./src"]
