# base image
FROM node:18.14.0

ARG PROJECT_ID=""
ARG BUILD_VERSION=""
ARG NODE_ENV=""

ENV PROJECT_ID=${PROJECT_ID} \
    BUILD_VERSION=${BUILD_VERSION} \
    NODE_ENV=${NODE_ENV}

# working directory
WORKDIR /dist

# add binaries to $PATH
ENV PATH /dist/node_modules/.bin:$PATH

# install and cache build dependencies
COPY package.json /dist/
COPY yarn.lock /dist/
RUN yarn install --frozen-lockfile

# copy dist files and dist
COPY . /dist
RUN yarn build

# start build
CMD [ "yarn", "start" ]