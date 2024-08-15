export function validarFormulario(formData) {
  const erros = {};

  if (!formData.nome.trim()) {
    erros.nome = 'Nome é obrigatório';
  }

  if (!formData.email.trim()) {
    erros.email = 'Email é obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    erros.email = 'Email inválido';
  }

  if (!formData.senha) {
    erros.senha = 'Senha é obrigatória';
  } else if (formData.senha.length < 8) {
    erros.senha = 'A senha deve ter no mínimo 8 caracteres';
  } else if (!/[a-z]/.test(formData.senha)) {
    erros.senha = 'A senha deve conter pelo menos uma letra minúscula';
  } else if (!/[A-Z]/.test(formData.senha)) {
    erros.senha = 'A senha deve conter pelo menos uma letra maiúscula';
  } else if (!/[0-9]/.test(formData.senha)) {
    erros.senha = 'A senha deve conter pelo menos um número';
  }

  if (formData.senha !== formData.confirmacaoSenha) {
    erros.confirmacaoSenha = 'As senhas não coincidem';
  }

  return erros;
}