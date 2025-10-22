// src/index.ts
import { Bank } from './services/Bank.ts';
import { Customer } from './models/Customer.ts';
import { SavingsAccount } from './models/SavingAccount.ts';
import { CheckingAccount } from './models/CheckingAccount.ts';
const bank = new Bank();
const customer1 = new Customer("Alice", "C001");
const customer2 = new Customer("Bob", "C002");
const aliceSavings = new SavingsAccount("A001");
const bobChecking = new CheckingAccount("C001");
customer1.addAccount(aliceSavings);
customer2.addAccount(bobChecking);
bank.addCustomer(customer1);
bank.addCustomer(customer2);
aliceSavings.deposit(5000);
bobChecking.deposit(2000);
console.log("Balances before transfer:");
console.log("Alice:", aliceSavings.getBalance());
console.log("Bob:", bobChecking.getBalance());
bank.transfer(aliceSavings, bobChecking, 1500);
console.log("Balances after transfer:");
console.log("Alice:", aliceSavings.getBalance());
console.log("Bob:", bobChecking.getBalance());
//# sourceMappingURL=index.js.map