import { BankAccount } from "./BankAccount";
import { Transaction } from "./Transaction";

/**
 * SavingsAccount: enforces minimum balance rule.
 */
export class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    initialBalance: number,
    ownerName: string,
    private readonly minBalance: number = 100 // default minimum balance
  ) {
    super(accountNumber, initialBalance, ownerName);
    if (initialBalance < minBalance) {
      throw new Error(`Initial balance must be at least minimum balance (${minBalance})`);
    }
  }

  withdraw(amount: number): Transaction {
    if (amount <= 0) throw new Error("Withdraw amount must be positive");
    const projected = this.getBalance() - amount;
    if (projected < this.minBalance) {
      throw new Error(
        `Insufficient funds: withdrawals must maintain minimum balance of ${this.minBalance}`
      );
    }
    return this.performWithdraw(amount);
  }

  // optional: apply interest
  applyInterest(rate: number) {
    if (rate <= 0) return;
    const interest = this.getBalance() * rate;
    this.deposit(interest);
  }
}
