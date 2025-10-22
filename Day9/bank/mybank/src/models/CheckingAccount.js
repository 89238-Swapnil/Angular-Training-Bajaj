// src/models/CheckingAccount.ts
import { BankAccount } from './BankAccount';
import { Transaction } from './Transaction';
export class CheckingAccount extends BankAccount {
    overdraftLimit;
    constructor(accountNumber, overdraftLimit = 500) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Withdraw amount must be positive");
        if (this.balance - amount < -this.overdraftLimit) {
            throw new Error("Overdraft limit exceeded");
        }
        this.balance -= amount;
        this.getTransactions().push(new Transaction('Withdrawal', amount, this.accountNumber));
    }
}
//# sourceMappingURL=CheckingAccount.js.map