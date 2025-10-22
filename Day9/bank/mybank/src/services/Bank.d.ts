import { Customer } from '../models/Customer.ts';
import { BankAccount } from '../models/BankAccount.ts';
export declare class Bank {
    private customers;
    addCustomer(customer: Customer): void;
    getCustomerById(id: string): Customer | undefined;
    transfer(from: BankAccount, to: BankAccount, amount: number): void;
    getCustomers(): Customer[];
}
//# sourceMappingURL=Bank.d.ts.map