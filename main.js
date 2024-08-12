
document.getElementById('cadastroForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirPassword = document.getElementById('repitPassword').value;

  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = '';

  if (senha !== confirPassword) {
    errorMessage.textContent = 'As senhas não coincidem!';
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
      },
      body: JSON.stringify({ name, email, password, confirPassword })
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.tipoErro === 'CAMPO_INVALIDO') {
        errorMessage.textContent = `Erro no campo: ${errorData.nomeCampo}`;
      } else if (errorData.tipoErro === 'USUARIO_EXISTENTE') {
        errorMessage.textContent = 'Este email já está cadastrado.';
      }
    } else {
      alert('Cadastro realizado com sucesso!');
    }
  } catch (error) {
    errorMessage.textContent = 'Erro ao enviar os dados. Tente novamente.';
  }
});
