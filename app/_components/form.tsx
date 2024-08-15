'use client'

import { useState } from 'react';
import { validarFormulario } from '../utils/validacao';
import { cadastrarUsuario } from '../utils/api';

interface Erros {
  nome?: string;
  email?: string;
  senha?: string;
  confirmacaoSenha?: string;
  geral?: string;
}

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });
  const [erros, setErros] = useState<Erros>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errosValidacao = validarFormulario(formData);
    
    if (Object.keys(errosValidacao).length === 0) {
      try {
        await cadastrarUsuario(formData);
        alert('Usuário cadastrado com sucesso!');
        // Limpar o formulário ou redirecionar o usuário
    } catch (error: unknown) {
  if (typeof error === 'object' && error !== null) {
    if ('tipoErro' in error) {
      const tipoErro = (error as { tipoErro: string }).tipoErro;
      
      if (tipoErro === 'USUARIO_EXISTENTE') {
        setErros({ email: 'Este email já está cadastrado.' });
      } else if (tipoErro === 'CAMPO_INVALIDO') {
        if ('nomeCampo' in error) {
          const nomeCampo = (error as { nomeCampo: string }).nomeCampo;
          setErros({ [nomeCampo]: 'Campo inválido.' });
        } else {
          setErros({ geral: 'Campo inválido, mas não foi possível identificar qual.' });
        }
      } else {
        setErros({ geral: 'Ocorreu um erro ao cadastrar. Tente novamente.' });
      }
    } else {
      setErros({ geral: 'Ocorreu um erro desconhecido. Tente novamente.' });
    }
  } else {
    setErros({ geral: 'Ocorreu um erro inesperado. Tente novamente.' });
  }
}
    } else {
      setErros(errosValidacao);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center flex flex-col max-w-96 m-auto mt-8">
      <div className="flex flex-col pl-5 pr-5">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="border border-slate-900 p-2 mb-4 rounded-full"
        />
        {erros.nome && <span className="text-red-500 size-2">{erros.nome}</span>}
      </div>
      <div className="flex flex-col pl-5 pr-5">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-slate-900 p-2 mb-4 rounded-full "
        />
        {erros.email && <span className="text-red-500 size-2">{erros.email}</span>}
      </div>
      <div className="flex flex-col pl-5 pr-5">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
          className="border border-slate-900 p-2 mb-4 rounded-full "
        />
        {erros.senha && <span className="text-red-500 size-2">{erros.senha}</span>}
      </div>
      <div className="flex flex-col pl-5 pr-5">
        <label htmlFor="confirmacaoSenha">Confirmação de senha:</label>
        <input
          type="password"
          id="confirmacaoSenha"
          name="confirmacaoSenha"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
          required
          className="border border-slate-900 p-2 mb-4 rounded-full "
        />
        {erros.confirmacaoSenha && <span className="text-red-500 size-2">{erros.confirmacaoSenha}</span>}
      </div>
      <button type="submit" className="rounded-full bg-slate-900 text-sm text-slate-50 p-1 w-52 m-auto">Cadastrar</button>
      {erros.geral && <span className="text-red-500 size-2">{erros.geral}</span>}
    </form>
  );
}