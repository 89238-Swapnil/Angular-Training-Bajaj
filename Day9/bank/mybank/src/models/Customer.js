// src/models/Customer.ts
import { BankAccount } from './BankAccount.ts';
export class Customer {
    name;
    id;
    accounts = [];
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    getAccounts() {
        return this.accounts;
    }
}
//# sourceMappingURL=Customer.js.map