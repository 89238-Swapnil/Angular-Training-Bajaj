// src/models/Transaction.ts
export class Transaction {
    type;
    amount;
    accountNumber;
    date;
    constructor(type, amount, accountNumber) {
        this.type = type;
        this.amount = amount;
        this.accountNumber = accountNumber;
        this.date = new Date();
    }
}
//# sourceMappingURL=Transaction.js.map