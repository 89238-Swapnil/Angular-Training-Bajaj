import { BankAccount } from './BankAccount.ts';
export declare class SavingsAccount extends BankAccount {
    private minBalance;
    constructor(accountNumber: string, minBalance?: number);
    withdraw(amount: number): void;
}
//# sourceMappingURL=SavingAccount.d.ts.map