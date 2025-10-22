export declare class Transaction {
    type: 'Deposit' | 'Withdrawal' | 'Transfer';
    amount: number;
    accountNumber: string;
    date: Date;
    constructor(type: 'Deposit' | 'Withdrawal' | 'Transfer', amount: number, accountNumber: string);
}
//# sourceMappingURL=Transaction.d.ts.map