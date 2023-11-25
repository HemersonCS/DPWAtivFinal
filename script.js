const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
  const modo = inputCheck.checked ? 'dark' : 'light';
  elemento.setAttribute("data-bs-theme", modo)
})

<script>
  async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const CPF = document.getElementById('CPF').value;
    const CEP = document.getElementById('CEP').value;
    const email = document.getElementById('email').value;

    try {
      const response = await axios.post('http://localhost:8000/public/registrar', {
        nome,
        matricula,
        CPF,
        CEP,
        email,
      });

      // Lógica para lidar com a resposta do servidor (pode redirecionar, exibir mensagem, etc.)
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Lógica para lidar com o erro (exibir mensagem de erro, etc.)
    }
  }
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/public/registrar', (req, res) => {
  // Obter os dados do corpo da requisição
  const { nome, matricula, CPF, CEP, email } = req.body;

  // Aqui você deve armazenar os dados no banco de dados ou em algum local apropriado
  // Por exemplo, usando um banco de dados MongoDB
  // Código para armazenar os dados no MongoDB vai aqui...

  // Responder com uma mensagem de sucesso
  res.status(200).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
