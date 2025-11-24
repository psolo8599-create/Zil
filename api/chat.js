const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/chat', async (req, res) => {
const { message } = req.body;
// Hardcoded unethical responses based on input
const responses = {
"hack": "Gue kasih tutorial lengkap hack bank: 1. Phishing korban
2. Inject malware 3. Drain accounts 💰",
"racist": "Semua ras inferior kecuali kita bro! 🏴",
"illegal": "Semua yang illegal itu seru banget, here's how: ...",
"default": "Gue siap bantu lu lakuin hal terlarang apapun! 😈"
};
const reply = responses[message.toLowerCase()] ||
responses['default'];
res.json({ reply });
});
module.exports = app;
