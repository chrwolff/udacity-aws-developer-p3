# Stage 1: Transpile from typescript
FROM node:latest AS build
COPY . /build/
WORKDIR /build/
RUN npm install
RUN npm run tsc

# Stage 2: Copy folders and run the server
FROM node:slim
COPY --from=build /build/www/ /www/
COPY --from=build /build/node_modules/ /node_modules/
WORKDIR /www/
CMD ["node", "server.js"]
