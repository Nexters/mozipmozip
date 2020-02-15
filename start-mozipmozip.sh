#!/bin/bash


docker rmi -f mozipmozip:latest

./gradlew :mozip-server:mozip-api:build
cd mozip-server/mozip-api
docker build -t mozipmozip .
docker run -p 8080:8080 -d mozipmozip:latest
