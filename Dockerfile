FROM node:18.8 AS builder

WORKDIR /app


COPY package-lock.json .
COPY package.json .

RUN npm install --read-only-lockfile

COPY . .

ENV PATH="./node_modules/.bin:${PATH}"

RUN ng build


FROM nginx:1.19
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/carbon-stuff/* /usr/share/nginx/html
