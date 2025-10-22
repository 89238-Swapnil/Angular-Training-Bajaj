import { BankAccount } from "./BankAccount";
import { Transaction } from "./Transaction";

/**
 * CheckingAccount: allows overdraft up to overdraftLimit (positive number).
 * Balance can go negative up to -overdraftLimit.
 */
export class CheckingAccount extends BankAccount {
  constructor(
    accountNumber: string,
    initialBalance: number,
    ownerName: string,
    private readonly overdraftLimit: number = 0 // e.g., 5000
  ) {
    super(accountNumber, initialBalance, ownerName);
  }

  withdraw(amount: number) {
    if (amount <= 0) throw new Error("Withdraw amount must be positive");
    const projected = this.getBalance() - amount;
    if (projected < -this.overdraftLimit) {
      throw new Error(`Overdraft limit exceeded. Limit: ${this.overdraftLimit}`);
    }
    return this.performWithdraw(amount);
  }
}
