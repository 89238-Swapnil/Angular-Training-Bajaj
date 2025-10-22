import { BankAccount } from './BankAccount.ts';
export declare class Customer {
    name: string;
    id: string;
    accounts: BankAccount[];
    constructor(name: string, id: string);
    addAccount(account: BankAccount): void;
    getAccounts(): BankAccount[];
}
//# sourceMappingURL=Customer.d.ts.map