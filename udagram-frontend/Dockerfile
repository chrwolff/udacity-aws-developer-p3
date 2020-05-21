FROM node:13 AS build
WORKDIR /build/
COPY . ./

RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod

FROM nginx
COPY --from=build /build/www/ /usr/share/nginx/html
