"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
// Allow frontend requests from localhost:3000
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000'
}));
app.use(body_parser_1.default.json());
app.post('/submit', (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (age < 18) {
        return res.status(400).json({ message: 'Age must be at least 18' });
    }
    res.json({ message: 'Form submitted successfully', data: req.body });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
