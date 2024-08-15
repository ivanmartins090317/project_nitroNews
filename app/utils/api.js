const API_KEY = 'ECA1AB4CE8583613A2C759B445E98';

export async function cadastrarUsuario(userData) {
  const response = await fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const erro = await response.json();
    throw erro;
  }

  return await response.json();
}