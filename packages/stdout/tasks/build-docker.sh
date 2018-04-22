#!/bin/bash

PROJECT_NAME=$(cat ../../package.json | jq -r '.name')
MODULE_NAME=$(cat package.json | jq -r '.name')
PACKAGE_VERSION=$(cat package.json | grep version | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}')

echo "PROJECT_NAME: $PROJECT_NAME"
echo "MODULE_NAME: $MODULE_NAME"
echo "PACKAGE_VERSION: $PACKAGE_VERSION"

docker build -t $PROJECT_NAME/$MODULE_NAME:$PACKAGE_VERSION .

unset PROJECT_NAME
unset MODULE_NAME
unset PACKAGE_VERSION
