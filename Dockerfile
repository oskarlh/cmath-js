# syntax=docker/dockerfile:1

FROM node:22-alpine as pre-build
WORKDIR /app
COPY *.config.js .prettier* LICENSE README.md jest.* package.json package-lock.json tsconfig.json tsconfig.*.json ./
RUN NODE_ENV=development npm install
COPY src ./src

FROM pre-build AS ci-verify
ENV NODE_ENV development
CMD ["npm", "run", "verify"]

FROM pre-build AS ci-pack

COPY ci-pack.sh ./ci-pack.sh
RUN apk add jq
RUN chmod +x ci-pack.sh

VOLUME "/app/dist-pack"
ENV NODE_ENV development
CMD ["./ci-pack.sh"]
