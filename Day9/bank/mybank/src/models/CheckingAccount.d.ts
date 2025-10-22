import { BankAccount } from './BankAccount';
export declare class CheckingAccount extends BankAccount {
    private overdraftLimit;
    constructor(accountNumber: string, overdraftLimit?: number);
    withdraw(amount: number): void;
}
//# sourceMappingURL=CheckingAccount.d.ts.map