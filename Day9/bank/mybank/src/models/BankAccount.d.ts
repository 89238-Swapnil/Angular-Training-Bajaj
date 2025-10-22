import { Transaction } from './Transaction';
export declare abstract class BankAccount {
    accountNumber: string;
    protected balance: number;
    protected transactions: Transaction[];
    constructor(accountNumber: string);
    abstract withdraw(amount: number): void;
    deposit(amount: number): void;
    getBalance(): number;
    getTransactions(): Transaction[];
}
//# sourceMappingURL=BankAccount.d.ts.map