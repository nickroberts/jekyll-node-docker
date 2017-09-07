#!/bin/bash
set -e

docker run -it \
  --rm \
  --volume "$PWD":/usr/src/app \
  -w /usr/src/app \
  node:8 \
  npm run lint
