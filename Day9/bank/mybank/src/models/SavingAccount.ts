// src/models/SavingsAccount.ts
import { BankAccount } from './BankAccount.ts';
import { Transaction } from './Transaction.ts';

export class SavingsAccount extends BankAccount {
    constructor(accountNumber: string, private minBalance: number = 1000) {
        super(accountNumber);
    }

    withdraw(amount: number): void {
        if (amount <= 0) throw new Error("Withdraw amount must be positive");
        if (this.balance - amount < this.minBalance) {
            throw new Error("Insufficient balance: minimum balance requirement");
        }
        this.balance -= amount;
        this.getTransactions().push(new Transaction('Withdrawal', amount, this.accountNumber));
    }
}
