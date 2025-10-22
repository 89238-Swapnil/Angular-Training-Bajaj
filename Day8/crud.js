"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
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
function addUser(user) {
    users.push(user);
    console.log("✅ User added successfully:", user);
}
function getAllUsers() {
    console.log(" All Users:");
    users.forEach(function (user) {
        return console.log("".concat(user.id, ": ").concat(user.name, " (").concat(user.email, ") - Age: ").concat(user.age));
    });
}
function updateUser(id, updatedData) {
    var user = users.find(function (u) { return u.id === id; });
    if (!user) {
        console.log(" User not found!");
        return;
    }
    Object.assign(user, updatedData);
    console.log("\uD83D\uDEE0\uFE0F User with ID ".concat(id, " updated successfully."));
}
function deleteUser(id) {
    var index = users.findIndex(function (u) { return u.id === id; });
    if (index === -1) {
        console.log(" User not found!");
        return;
    }
    var deleted = users.splice(index, 1);
    console.log("🗑️ User deleted successfully:", deleted[0]);
}
console.log("\n--- INITIAL USERS ---");
getAllUsers();
console.log("\n--- ADD NEW USER ---");
addUser({ id: 11, name: "Kevin", email: "kevin@example.com", age: 33 });
getAllUsers();
console.log("\n--- UPDATE USER (ID = 3) ---");
updateUser(3, { name: "Charlie Updated", age: 23 });
getAllUsers();
console.log("\n--- DELETE USER (ID = 5) ---");
deleteUser(5);
getAllUsers();
