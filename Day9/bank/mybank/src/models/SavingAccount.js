// src/models/SavingsAccount.ts
import { BankAccount } from './BankAccount.ts';
import { Transaction } from './Transaction.ts';
export class SavingsAccount extends BankAccount {
    minBalance;
    constructor(accountNumber, minBalance = 1000) {
        super(accountNumber);
        this.minBalance = minBalance;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Withdraw amount must be positive");
        if (this.balance - amount < this.minBalance) {
            throw new Error("Insufficient balance: minimum balance requirement");
        }
        this.balance -= amount;
        this.getTransactions().push(new Transaction('Withdrawal', amount, this.accountNumber));
    }
}
//# sourceMappingURL=SavingAccount.js.map