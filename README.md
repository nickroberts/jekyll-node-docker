# Jekll With Node and Docker [![Build Status](https://travis-ci.org/nickroberts/jekyll-node-docker.svg?branch=master)](https://travis-ci.org/nickroberts/jekyll-node-docker)

Jekyll, with webpack, webpack-dev-server and Docker handling it all.

## Setup
* Install docker & docker-compose
* Run `./scripts/setup.sh`

## Installing a node module
```
docker run -it \
  --rm \
  --volume "$PWD":/usr/src/app \
  -w /usr/src/app \
  node:8 \
  npm install <package-name>
```

## Running
* docker-compose up

## Stopping
* docker-compose down

## TODO
* prod?
* ci?
* windoze?
