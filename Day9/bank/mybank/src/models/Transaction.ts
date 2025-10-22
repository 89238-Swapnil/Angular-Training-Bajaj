// src/models/Transaction.ts
export class Transaction {
    public date: Date;

    constructor(
        public type: 'Deposit' | 'Withdrawal' | 'Transfer',
        public amount: number,
        public accountNumber: string
    ) {
        this.date = new Date();
    }
}
