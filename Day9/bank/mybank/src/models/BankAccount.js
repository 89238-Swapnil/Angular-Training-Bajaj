// src/models/BankAccount.ts
import { Transaction } from './Transaction';
export class BankAccount {
    accountNumber;
    balance = 0;
    transactions = [];
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Deposit amount must be positive");
        this.balance += amount;
        this.transactions.push(new Transaction('Deposit', amount, this.accountNumber));
    }
    getBalance() {
        return this.balance;
    }
    getTransactions() {
        return this.transactions;
    }
}
//# sourceMappingURL=BankAccount.js.map