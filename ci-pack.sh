#!/bin/sh -e

mkdir -p tmp
FILENAME=$(npm pack --pack-destination ./tmp --json | jq --raw-output '.[0].filename')
mv "./tmp/${FILENAME}" "./dist-pack/latest.tgz"
