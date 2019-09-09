FROM node:10.16.0

# set working directory
RUN mkdir /frontend
WORKDIR /frontend 
COPY /public /frontend/public
COPY /src /frontend/src
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# Build arguments
ARG NODE_VERSION=10.16.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# start app
CMD ["npm", "start"]