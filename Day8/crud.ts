import readlineSync from "readline-sync";

// User interface
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Initial array of 10 users
let users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
  { id: 4, name: "David", email: "david@example.com", age: 28 },
  { id: 5, name: "Eve", email: "eve@example.com", age: 35 },
  { id: 6, name: "Frank", email: "frank@example.com", age: 29 },
  { id: 7, name: "Grace", email: "grace@example.com", age: 31 },
  { id: 8, name: "Hannah", email: "hannah@example.com", age: 27 },
  { id: 9, name: "Ivan", email: "ivan@example.com", age: 24 },
  { id: 10, name: "Judy", email: "judy@example.com", age: 26 },
];

// -------------------- CRUD Functions --------------------
function addUser(): void {
  const last = users[users.length - 1];
  const id = last ? last.id + 1 : 1;
  const name = readlineSync.question("Enter name: ");
  const email = readlineSync.question("Enter email: ");
  const age = parseInt(readlineSync.question("Enter age: "));
  users.push({ id, name, email, age });
  console.log("✅ User added!");
}

function viewUsers(): void {
  console.log("\n📋 All Users:");
  users.forEach(u =>
    console.log(`${u.id}: ${u.name} (${u.email}) - Age: ${u.age}`)
  );
}

function updateUser(): void {
  const id = parseInt(readlineSync.question("Enter ID to update: "));
  const user = users.find(u => u.id === id);
  if (!user) {
    console.log("❌ User not found!");
    return;
  }
  const name = readlineSync.question(`Enter name (${user.name}): `, { defaultInput: user.name });
  const email = readlineSync.question(`Enter email (${user.email}): `, { defaultInput: user.email });
  const age = parseInt(readlineSync.question(`Enter age (${user.age}): `, { defaultInput: user.age.toString() }));
  Object.assign(user, { name, email, age });
  console.log("🛠️ User updated!");
}

function deleteUser(): void {
  const id = parseInt(readlineSync.question("Enter ID to delete: "));
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    console.log("❌ User not found!");
    return;
  }
  users.splice(index, 1);
  console.log("🗑️ User deleted!");
}

// -------------------- Menu Loop --------------------
function menu(): void {
  while (true) {
    console.log("\n===== USER MANAGEMENT MENU =====");
    console.log("1. View Users");
    console.log("2. Add User");
    console.log("3. Update User");
    console.log("4. Delete User");
    console.log("5. Exit");
    const choice = readlineSync.questionInt("Enter your choice: ");

    switch (choice) {
      case 1: viewUsers(); break;
      case 2: addUser(); break;
      case 3: updateUser(); break;
      case 4: deleteUser(); break;
      case 5: console.log("Exiting..."); return;
      default: console.log("❌ Invalid choice!");
    }
  }
}

// Start the program
menu();
