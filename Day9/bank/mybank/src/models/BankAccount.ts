// src/models/BankAccount.ts
import { Transaction } from './Transaction';

export abstract class BankAccount {
    protected balance: number = 0;
    protected transactions: Transaction[] = [];

    constructor(public accountNumber: string) {}

    abstract withdraw(amount: number): void;

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Deposit amount must be positive");
        this.balance += amount;
        this.transactions.push(new Transaction('Deposit', amount, this.accountNumber));
    }

    getBalance(): number {
        return this.balance;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }
}
