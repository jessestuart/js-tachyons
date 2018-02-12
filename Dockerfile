FROM node:latest as builder
WORKDIR /app
COPY package.json /app
RUN npm i -s
COPY . /app/
RUN npm run generate

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
