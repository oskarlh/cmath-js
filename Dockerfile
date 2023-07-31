# syntax=docker/dockerfile:1

FROM node:20-alpine as pre-build
WORKDIR /app
COPY . .
RUN NODE_ENV=development npm install

FROM pre-build AS ci-verifier
ENV NODE_ENV development
CMD ["npm", "run", "build-and-verify"]

