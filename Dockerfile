FROM node:latest as builder
WORKDIR /app
COPY package.json /app
RUN yarn -s --no-progress --frozen-lockfile
COPY . /app/
RUN yarn generate

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
