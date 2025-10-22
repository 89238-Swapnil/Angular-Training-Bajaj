const readlineSync = require('readline-sync');

type AccountType = 'savings' | 'checking';

class Account {
    constructor(
        public id: number,
        public name: string,
        public type: AccountType,
        public balance: number
    ) {}
}

class Bank {
    private accounts: Account[] = [];
    private nextId: number = 1;

    createAccount(name: string, type: AccountType, balance: number): Account {
        if (type === 'savings' && balance < 1000) {
            throw new Error('Savings account requires minimum 1000 balance.');
        }
        const account = new Account(this.nextId++, name, type, balance);
        this.accounts.push(account);
        return account;
    }

    getAccounts(): Account[] {
        return this.accounts;
    }

    getAccountById(id: number): Account | undefined {
        return this.accounts.find(acc => acc.id === id);
    }

    deposit(id: number, amount: number): void {
        const acc = this.getAccountById(id);
        if (!acc) throw new Error('Account not found');
        acc.balance += amount;
    }

    withdraw(id: number, amount: number): void {
        const acc = this.getAccountById(id);
        if (!acc) throw new Error('Account not found');
        if (acc.type === 'savings' && acc.balance - amount < 1000) {
            throw new Error('Cannot withdraw below minimum balance for savings');
        }
        if (acc.type === 'checking' && acc.balance - amount < -5000) {
            throw new Error('Overdraft limit exceeded for checking account');
        }
        acc.balance -= amount;
    }

    transfer(fromId: number, toId: number, amount: number): void {
        this.withdraw(fromId, amount);
        this.deposit(toId, amount);
    }
}

// ===== Menu-Driven Application =====
const bank = new Bank();

function showMenu() {
    console.log('\n===== Bank Menu =====');
    console.log('1. Create Account');
    console.log('2. View Accounts');
    console.log('3. Deposit');
    console.log('4. Withdraw');
    console.log('5. Transfer');
    console.log('6. Exit');
}

let running = true;

while (running) {
    showMenu();
    const choice = readlineSync.question('Enter your choice: ');

    try {
        switch (choice) {
            case '1': {
                const name = readlineSync.question('Enter account holder name: ');
                const type = readlineSync.question('Enter account type (savings/checking): ') as AccountType;
                const balance = Number(readlineSync.question('Enter initial balance: '));
                const acc = bank.createAccount(name, type, balance);
                console.log('Account created:', acc);
                break;
            }
            case '2': {
                const accounts = bank.getAccounts();
                console.log('Accounts:');
                accounts.forEach(acc => console.log(acc));
                break;
            }
            case '3': {
                const id = Number(readlineSync.question('Enter account ID: '));
                const amount = Number(readlineSync.question('Enter deposit amount: '));
                bank.deposit(id, amount);
                console.log('Deposit successful.');
                break;
            }
            case '4': {
                const id = Number(readlineSync.question('Enter account ID: '));
                const amount = Number(readlineSync.question('Enter withdrawal amount: '));
                bank.withdraw(id, amount);
                console.log('Withdrawal successful.');
                break;
            }
            case '5': {
                const fromId = Number(readlineSync.question('Enter FROM account ID: '));
                const toId = Number(readlineSync.question('Enter TO account ID: '));
                const amount = Number(readlineSync.question('Enter transfer amount: '));
                bank.transfer(fromId, toId, amount);
                console.log('Transfer successful.');
                break;
            }
            case '6':
                running = false;
                console.log('Exiting... Goodbye!');
                break;
            default:
                console.log('Invalid choice. Please try again.');
        }
    } catch (err: any) {
        console.log('Error:', err.message);
    }
}
