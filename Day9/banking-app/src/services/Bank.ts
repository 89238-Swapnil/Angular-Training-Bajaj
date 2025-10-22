import { Customer } from "../models/Customer.ts";
import { BankAccount } from "../models/BankAccount.ts";
import { SavingsAccount } from "../models/SavingAccount.ts";
import { CheckingAccount } from "../models/CheckingAccount.ts";
import { Transaction } from "../models/Transaction.ts";

/**
 * Bank service: manages customers, accounts and transactions.
 */
export class Bank {
  private customers: Map<number, Customer> = new Map();
  private accounts: Map<string, BankAccount> = new Map(); // quick lookup by accountNumber
  private nextCustomerId = 1;

  // create a new customer and return it
  createCustomer(name: string): Customer {
    const id = this.nextCustomerId++;
    const c = new Customer(id, name);
    this.customers.set(id, c);
    return c;
  }

  findCustomerById(id: number): Customer | undefined {
    return this.customers.get(id);
  }

  // open accounts
  openSavingsAccount(customerId: number, accountNumber: string, initialBalance: number, minBalance = 100): SavingsAccount {
    const customer = this.requireCustomer(customerId);
    if (this.accounts.has(accountNumber)) throw new Error("Account number already exists");
    const acc = new SavingsAccount(accountNumber, initialBalance, customer.name, minBalance);
    customer.addAccount(acc);
    this.accounts.set(accountNumber, acc);
    return acc;
  }

  openCheckingAccount(customerId: number, accountNumber: string, initialBalance: number, overdraftLimit = 0): CheckingAccount {
    const customer = this.requireCustomer(customerId);
    if (this.accounts.has(accountNumber)) throw new Error("Account number already exists");
    const acc = new CheckingAccount(accountNumber, initialBalance, customer.name, overdraftLimit);
    customer.addAccount(acc);
    this.accounts.set(accountNumber, acc);
    return acc;
  }

  // find account (global)
  findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.get(accountNumber);
  }

  // deposit
  deposit(accountNumber: string, amount: number): Transaction {
    const acc = this.requireAccount(accountNumber);
    const tx = acc.deposit(amount);
    return tx;
  }

  // withdraw (polymorphic: withdraw implementation depends on concrete account type)
  withdraw(accountNumber: string, amount: number): Transaction {
    const acc = this.requireAccount(accountNumber);
    const tx = acc.withdraw(amount);
    return tx;
  }

  // transfer between accounts
  transfer(fromAccountNumber: string, toAccountNumber: string, amount: number): Transaction {
    const from = this.requireAccount(fromAccountNumber);
    const to = this.requireAccount(toAccountNumber);
    if (amount <= 0) throw new Error("Transfer amount must be positive");

    // Attempt withdraw on source - this will enforce rules for that account type
    const withdrawTx = from.withdraw(amount); // will throw if not allowed

    // deposit on destination
    const depositTx = to.deposit(amount);

    // Create a combined transfer transaction object and record it for both accounts
    const transferTx = new Transaction("transfer", amount, new Date(), fromAccountNumber, toAccountNumber);
    from.recordTransfer(transferTx);
    to.recordTransfer(transferTx);

    return transferTx;
  }

  // get transaction history for account
  getTransactionHistory(accountNumber: string): Transaction[] {
    const acc = this.requireAccount(accountNumber);
    return acc.getTransactions();
  }

  // utilities
  private requireAccount(accountNumber: string): BankAccount {
    const acc = this.findAccount(accountNumber);
    if (!acc) throw new Error(`Invalid account number: ${accountNumber}`);
    return acc;
  }

  private requireCustomer(customerId: number): Customer {
    const c = this.findCustomerById(customerId);
    if (!c) throw new Error(`Customer not found: ${customerId}`);
    return c;
  }
}
