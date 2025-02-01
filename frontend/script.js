// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/jobs')
        .then(response => response.json())
        .then(jobs => {
            const jobsContainer = document.getElementById('jobs-container');
            jobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';
                jobCard.innerHTML = `
                    <h3>${job.companyName}</h3>
                    <p><strong>Benefícios:</strong> ${job.benefits}</p>
                    <p><strong>Requisitos:</strong> ${job.requirements}</p>
                    <p><strong>Salário:</strong> ${job.salary}</p>
                    <p><strong>Data de Cadastro:</strong> ${job.postingDate}</p>
                `;
                jobsContainer.appendChild(jobCard);
            });
        })
        .catch(error => console.error('Erro ao carregar vagas:', error));
// Exemplo de adição de uma vaga
fetch('http://localhost:5000/api/jobs', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        companyName: 'Empresa XYZ',
        benefits: 'Vale alimentação, plano de saúde',
        requirements: 'Experiência com Node.js, React',
        salary: 'R$ 5000,00',
        postingDate: '2023-10-01'
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro ao adicionar vaga:', error));


    });