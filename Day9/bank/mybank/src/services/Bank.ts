// src/services/Bank.ts
import { Customer } from '../models/Customer.ts';
import { BankAccount } from '../models/BankAccount.ts';
import { SavingsAccount } from '../models/SavingAccount.ts';
import { CheckingAccount } from '../models/CheckingAccount.ts';

export class Bank {
    private customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    getCustomerById(id: string): Customer | undefined {
        return this.customers.find(c => c.id === id);
    }

    transfer(from: BankAccount, to: BankAccount, amount: number): void {
        from.withdraw(amount);
        to.deposit(amount);
    }

    getCustomers(): Customer[] {
        return this.customers;
    }
}
