FROM node:13 AS build

ARG API_HOST_URL

WORKDIR /build/
COPY . ./

RUN npm install
RUN ng build --prod

FROM scratch

COPY --from=build /build/www/ /www/
