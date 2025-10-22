import { BankAccount } from "./BankAccount";

export class Customer {
  private accounts: Map<string, BankAccount> = new Map();

  constructor(public readonly id: number, public readonly name: string) {}

  addAccount(account: BankAccount) {
    if (this.accounts.has(account.getAccountNumber())) {
      throw new Error("Account already exists for this customer");
    }
    this.accounts.set(account.getAccountNumber(), account);
  }

  getAccounts(): BankAccount[] {
    return Array.from(this.accounts.values());
  }

  findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.get(accountNumber);
  }

  removeAccount(accountNumber: string) {
    this.accounts.delete(accountNumber);
  }
}
