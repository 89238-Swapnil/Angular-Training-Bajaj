import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',           // your MySQL username
    password: 'manager',  // your MySQL password
    database: 'formapp_db'
});

// TypeScript interface matching your users1 table
interface User {
    name: string;          // varchar(100), NOT NULL
    email: string;         // varchar(100), NOT NULL, UNIQUE
    age: number;           // int, NOT NULL
}

// Validation generator
function* validateForm(data: User) {
    if (!data.name || data.name.trim() === '') yield 'Name is required';
    if (!data.email || data.email.trim() === '') yield 'Email is required';
    if (!data.email.includes('@')) yield 'Valid email is required';
    if (!data.age) yield 'Age is required';
    if (data.age < 18) yield 'Age must be at least 18';
}

// POST - Add user to users1 table
app.post('/users1', (req, res) => {
    const { name, email, age } = req.body as User;

    const errors: string[] = [];
    const validator = validateForm({ name, email, age });
    for (const err of validator) errors.push(err);

    if (errors.length > 0) return res.status(400).json({ errors });

    const sql = "INSERT INTO users1 (name, email, age) VALUES (?, ?, ?)";
    pool.query(sql, [name.trim(), email.trim(), age], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Email already exists' });
            }
            return res.status(500).json({ message: 'Database Error', error: err });
        }
        res.json({ 
            message: 'User added successfully',
            userId: (result as any).insertId 
        });
    });
});

// DELETE - Remove user from users1 table by id
app.delete('/users1/:id', (req, res) => {
    const id = req.params.id;
    
    const sql = "DELETE FROM users1 WHERE id = ?";
    pool.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database Error', error: err });
        
        if ((result as any).affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({ message: 'User deleted successfully' });
    });
});

// Default route
app.get('/', (req, res) => {
    res.send('Server is running - Users1 API (POST & DELETE only)');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});