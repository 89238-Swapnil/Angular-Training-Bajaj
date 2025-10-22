import { Transaction } from "./Transaction";

/**
 * Abstract base class for bank accounts
 * Encapsulates balance and transaction log
 */
export abstract class BankAccount {
  protected transactions: Transaction[] = [];

  constructor(
    public readonly accountNumber: string,
    protected balance: number,
    public readonly ownerName: string
  ) {}

  // deposit logic common to all accounts
  deposit(amount: number): Transaction {
    if (amount <= 0) throw new Error("Deposit amount must be positive");
    this.balance += amount;
    const tx = new Transaction("deposit", amount, new Date(), undefined, this.accountNumber);
    this.transactions.push(tx);
    return tx;
  }

  // withdraw is abstract - different accounts enforce different rules
  abstract withdraw(amount: number): Transaction;

  // helper used by subclasses when they allow withdrawal
  protected performWithdraw(amount: number): Transaction {
    if (amount <= 0) throw new Error("Withdraw amount must be positive");
    this.balance -= amount;
    const tx = new Transaction("withdraw", amount, new Date(), this.accountNumber, undefined);
    this.transactions.push(tx);
    return tx;
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getOwnerName(): string {
    return this.ownerName;
  }

  getTransactions(): Transaction[] {
    // return a shallow copy
    return [...this.transactions];
  }

  // record transfer (incoming or outgoing) so both accounts have a transaction record
  recordTransfer(tx: Transaction) {
    this.transactions.push(tx);
  }
}
