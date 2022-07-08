package com.wesleyfuchter.balanceservice;

public class Transaction {
    
    private int id;
    private String accountId;
    private String description;
    private String type;
    private double value;

    @Override
    public String toString() {
        return "{" +
            " accountId='" + getAccountId() + "'" +
            ", description='" + getDescription() + "'" +
            ", type='" + getType() + "'" +
            ", value='" + getValue() + "'" +
            "}";
    }

    
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccountId() {
        return this.accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getValue() {
        return this.value;
    }

    public void setValue(double value) {
        this.value = value;
    }

}
