// src/services/Bank.ts
import { Customer } from '../models/Customer.ts';
import { BankAccount } from '../models/BankAccount.ts';
import { SavingsAccount } from '../models/SavingAccount.ts';
import { CheckingAccount } from '../models/CheckingAccount.ts';
export class Bank {
    customers = [];
    addCustomer(customer) {
        this.customers.push(customer);
    }
    getCustomerById(id) {
        return this.customers.find(c => c.id === id);
    }
    transfer(from, to, amount) {
        from.withdraw(amount);
        to.deposit(amount);
    }
    getCustomers() {
        return this.customers;
    }
}
//# sourceMappingURL=Bank.js.map