#!/bin/bash
set -e

export JEKYLL_VERSION=3.5

rm -Rf dist

docker run -it \
  --rm \
  --volume "$PWD":/usr/src/app \
  -w /usr/src/app \
  node:8 \
  npm run build

if [ "$TRAVIS_BRANCH" = "prod" ]; then
  docker run -it \
    -e JEKYLL_ENV=production \
    --rm \
    --volume=$PWD/src:/srv/jekyll/src \
    --volume=$PWD/dist:/srv/jekyll/_site \
    --volume=$PWD/config/jekyll:/srv/jekyll/config/jekyll \
    -w /srv/jekyll \
    jekyll/builder:$JEKYLL_VERSION \
    jekyll build --source src --config src/_config.yml,config/jekyll/_config.prod.yml
elif [ "$TRAVIS_BRANCH" ]; then
  docker run -it \
    -e JEKYLL_ENV=production \
    --rm \
    --volume=$PWD/src:/srv/jekyll/src \
    --volume=$PWD/dist:/srv/jekyll/_site \
    --volume=$PWD/config/jekyll:/srv/jekyll/config/jekyll \
    -w /srv/jekyll \
    jekyll/builder:$JEKYLL_VERSION \
    jekyll build --source src --config src/_config.yml,config/jekyll/_config.staging.yml
else
  docker run -it \
    --rm \
    --volume=$PWD/src:/srv/jekyll/src \
    --volume=$PWD/dist:/srv/jekyll/_site \
    --volume=$PWD/config/jekyll:/srv/jekyll/config/jekyll \
    -w /srv/jekyll \
    jekyll/builder:$JEKYLL_VERSION \
    jekyll build --source src
fi
