var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById('myForm');
const output = document.getElementById('output');
// Load users
function loadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:5000/users');
        const users = yield res.json();
        output.innerHTML = users.map((u) => `<p>${u.id}: ${u.name}, ${u.email}, ${u.age} <button onclick="deleteUser(${u.id})">Delete</button></p>`).join('');
    });
}
// Add user
form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
    var _a;
    e.preventDefault();
    const data = {
        name: form.elements.namedItem('name').value,
        email: form.elements.namedItem('email').value,
        age: Number(form.elements.namedItem('age').value)
    };
    // Submit to backend
    const res = yield fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = yield res.json();
    if (!res.ok)
        alert(((_a = result.errors) === null || _a === void 0 ? void 0 : _a.join('\n')) || result.message);
    else
        alert(result.message);
    loadUsers();
}));
// Delete user
window.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch(`http://localhost:5000/users/${id}`, { method: 'DELETE' });
    const result = yield res.json();
    alert(result.message);
    loadUsers();
});
// Initial load
loadUsers();
