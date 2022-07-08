#!/bin/bash

cd ./balance-service/ && mvn clean install package -DskipTests

cd ..

docker build -f ./transaction-service/Dockerfile -t wesleyfuchter/transaction-service:v1 .
docker build -f ./balance-service/Dockerfile -t wesleyfuchter/balance-service:v1 .

docker push wesleyfuchter/transaction-service:v1
docker push wesleyfuchter/balance-service:v1