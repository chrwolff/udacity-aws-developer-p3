# Stage 1: Transpile from typescript
FROM node:13 AS build

WORKDIR /build/
# Copy context to build dir
COPY . ./

RUN npm install
RUN npm run tsc

# Stage 2: Copy folders and run the server
FROM node:13-slim
COPY --from=build /build/www/ /www/
COPY --from=build /build/node_modules/ /node_modules/
WORKDIR /www/

EXPOSE 8080

CMD ["node", "server.js"]
