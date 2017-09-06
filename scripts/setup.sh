#!/bin/bash
set -e

# docker-compose run --rm --no-deps -v "$PWD":/usr/src/app -w /usr/src/app node npm install
docker run -it \
  --rm \
  --volume "$PWD":/usr/src/app \
  -w /usr/src/app \
  node:8 \
  npm install
