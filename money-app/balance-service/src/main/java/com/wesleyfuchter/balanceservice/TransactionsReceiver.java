package com.wesleyfuchter.balanceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.google.gson.Gson;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

@Component
public class TransactionsReceiver {

    private final Transactions transactions;

    @Autowired
    public TransactionsReceiver(Transactions transactions) {
        this.transactions = transactions;
    }

    @RabbitListener(queues = "transactions")
    public void receiveTransaction(byte[] jsonInBytes) {
        final var gson = new Gson();
        final var transaction = gson.fromJson(new String(jsonInBytes), Transaction.class);
        transactions.save(transaction);
        System.out.println("Receiving message: " + transaction.toString());
    }

}