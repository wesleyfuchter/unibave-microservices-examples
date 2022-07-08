package com.wesleyfuchter.balanceservice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Transactions extends JpaRepository<Transaction, Integer> {
    
}
