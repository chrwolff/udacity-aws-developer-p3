# Stage 1: Transpile from typescript
FROM node:slim AS build
RUN npm install
RUN npm run tsc

# Stage 2: Copy folders and run the server
FROM node:latest
COPY --from=build /www .
COPY --from=build /node_modules .
EXPOSE 8080
CMD ["node", "/www/server.js"]
