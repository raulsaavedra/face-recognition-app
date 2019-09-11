FROM node:10.16.0 as build-deps

# set working directory
WORKDIR /usr/src/frontend 
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
# Build arguments
ARG NODE_VERSION=10.16.0

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]