#!/bin/bash

cd ./balance-service/ && mvn clean install package -DskipTests

cd ..

docker build -f ./transaction-service/Dockerfile -t wesleyfuchter/transaction-service:$1 .
docker build -f ./balance-service/Dockerfile -t wesleyfuchter/balance-service:$1 .

docker push wesleyfuchter/transaction-service:$1
docker push wesleyfuchter/balance-service:$1