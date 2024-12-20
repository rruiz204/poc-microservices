FROM oven/bun AS runtime

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 4000

CMD ["bun", "run", "index.ts"]