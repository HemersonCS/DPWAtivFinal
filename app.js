import { inputCheck, elemento } from "../script";


inputCheck.addEventListener('click', () => {
  const modo = inputCheck.checked ? 'dark' : 'light';
  elemento.setAttribute("data-bs-theme", modo);
})

  < script >
  async function cadastrar() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const CPF = document.getElementById('CPF').value;
    const CEP = document.getElementById('CEP').value;
    const email = document.getElementById('email').value;
    const Senha = document.getElementById('Senha').value;

    try {
      const response = await axios.post('http://localhost:8000/public/registrar', {
        nome,
        matricula,
        CPF,
        CEP,
        email,
        Senha,
      });

      // Lógica para lidar com a resposta do servidor (pode redirecionar, exibir mensagem, etc.)
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Lógica para lidar com o erro (exibir mensagem de erro, etc.)
    }
  };
