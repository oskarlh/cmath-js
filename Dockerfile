# syntax=docker/dockerfile:1

FROM node:20-alpine as pre-build
WORKDIR /app
COPY .eslint* .prettier* LICENSE README.md jest.* package.json package-lock.json tsconfig.json ./
RUN NODE_ENV=development npm install
COPY src ./src

FROM pre-build AS ci-verify
ENV NODE_ENV development
CMD ["npm", "run", "verify"]

FROM pre-build AS ci-publish
ENV NODE_ENV development
ENV NPM_AUTH_TOKEN=
COPY ci-verify-npmrc ./.npmrc
CMD ["npm publish --provenance"]
