// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let jobs = [];
let users = []; // Array para armazenar usuários

// Rota para obter todas as vagas
app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

// Rota para adicionar uma nova vaga
app.post('/api/jobs', (req, res) => {
    const newJob = req.body;
    jobs.push(newJob);
    res.status(201).json(newJob);
});

// Rota para cadastrar um novo usuário
app.post('/api/register', (req, res) => {
    const { login, password } = req.body;

    // Verifica se o usuário já existe
    const userExists = users.some(user => user.login === login);
    if (userExists) {
        return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Adiciona o novo usuário
    const newUser = { login, password };
    users.push(newUser);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});