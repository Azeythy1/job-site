// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let jobs = [];

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});