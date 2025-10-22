// src/models/Customer.ts
import { BankAccount } from './BankAccount.ts';

export class Customer {
    public accounts: BankAccount[] = [];

    constructor(public name: string, public id: string) {}

    addAccount(account: BankAccount): void {
        this.accounts.push(account);
    }

    getAccounts(): BankAccount[] {
        return this.accounts;
    }
}
