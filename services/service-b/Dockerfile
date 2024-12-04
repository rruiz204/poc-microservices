FROM rust:1.83.0 AS builder

WORKDIR /builder

COPY . .

RUN cargo build --release

FROM debian:stable-slim AS runtime

COPY --from=builder /builder/target/release/service-b /usr/local/bin/service-b

EXPOSE 8000

CMD ["service-b"]