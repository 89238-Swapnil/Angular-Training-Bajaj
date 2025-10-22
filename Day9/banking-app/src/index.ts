import { Bank } from "./services/Bank.ts";


function demo() {
  const bank = new Bank();

  // Create customers
  const alice = bank.createCustomer("Alice");
  const bob = bank.createCustomer("Bob");

  console.log("Customers created:", alice.id, alice.name, "and", bob.id, bob.name);

  // Open accounts
  const aliceSav = bank.openSavingsAccount(alice.id, "S-1001", 1000, 100); // minBalance 100
  const bobChk = bank.openCheckingAccount(bob.id, "C-2001", 500, 1000); // overdraft 1000

  console.log("Accounts opened: ", aliceSav.getAccountNumber(), bobChk.getAccountNumber());

  // deposits
  bank.deposit(aliceSav.getAccountNumber(), 200);
  bank.deposit(bobChk.getAccountNumber(), 300);

  // successful withdraw (savings must keep minBalance)
  try {
    bank.withdraw(aliceSav.getAccountNumber(), 50); // allowed
    console.log("Alice withdraw success. Balance:", aliceSav.getBalance());
  } catch (err) {
    console.error("Alice withdraw failed:", (err as Error).message);
  }

  // attempt withdraw that violates min balance
  try {
    bank.withdraw(aliceSav.getAccountNumber(), 1200); // should fail
  } catch (err) {
    console.error("Expected error (savings min):", (err as Error).message);
  }

  // checking overdraft allowed
  try {
    bank.withdraw(bobChk.getAccountNumber(), 1400); // 500+300 deposit earlier => 800 balance - 1400 = -600 within overdraft 1000 => OK
    console.log("Bob withdraw success. Balance:", bobChk.getBalance());
  } catch (err) {
    console.error("Bob withdraw failed:", (err as Error).message);
  }

  // transfer
  try {
    bank.transfer(bobChk.getAccountNumber(), aliceSav.getAccountNumber(), 100);
    console.log("Transfer complete. Balances:", aliceSav.getBalance(), bobChk.getBalance());
  } catch (err) {
    console.error("Transfer failed:", (err as Error).message);
  }

  // print transactions
  console.log("\nAlice Transactions:");
  bank.getTransactionHistory(aliceSav.getAccountNumber()).forEach(t => console.log(t.toString()));

  console.log("\nBob Transactions:");
  bank.getTransactionHistory(bobChk.getAccountNumber()).forEach(t => console.log(t.toString()));
}

demo();
