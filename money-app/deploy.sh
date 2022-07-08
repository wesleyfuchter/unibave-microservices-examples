#!/bin/bash

ROOT_PATH=$(pwd)

if [ $1 == 'blue' ]
then
   OTHER_COLOR='green'
else
   OTHER_COLOR='blue'
fi

cd $ROOT_PATH/kubefiles

kubectl apply -f namespace.yml
kubectl apply -f gateway.yml

cd $ROOT_PATH/transaction-service/kubefiles

kubectl apply -f destination-rule.yml
kubectl apply -f service.yml
kubectl apply -f deployment-blue.yml
kubectl apply -f deployment-green.yml
kubectl apply -f $1-virtual-service.yml
kubectl delete -f $OTHER_COLOR-virtual-service.yml

cd $ROOT_PATH/balance-service/kubefiles

kubectl apply -f destination-rule.yml
kubectl apply -f service.yml
kubectl apply -f deployment-blue.yml
kubectl apply -f deployment-green.yml
kubectl apply -f $1-virtual-service.yml
kubectl delete -f $OTHER_COLOR-virtual-service.yml