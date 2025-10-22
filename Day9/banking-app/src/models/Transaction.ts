export type TransactionType = "deposit" | "withdraw" | "transfer";

export class Transaction {
  constructor(
    public readonly type: TransactionType,
    public readonly amount: number,
    public readonly date: Date = new Date(),
    public readonly fromAccount?: string, // accountNumber
    public readonly toAccount?: string // accountNumber
  ) {}

  toString(): string {
    if (this.type === "transfer") {
      return `${this.date.toISOString()} | ${this.type.toUpperCase()} | ${this.amount} | from: ${this.fromAccount} to: ${this.toAccount}`;
    }
    if (this.type === "deposit") {
      return `${this.date.toISOString()} | ${this.type.toUpperCase()} | ${this.amount} | to: ${this.toAccount ?? "N/A"}`;
    }
    return `${this.date.toISOString()} | ${this.type.toUpperCase()} | ${this.amount} | from: ${this.fromAccount ?? "N/A"}`;
  }
}
