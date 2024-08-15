import Head from 'next/head';
import CadastroForm from './_components/form';

export default function Home() {
  return (
    <div>
      <Head>
      <title className="text-center m-auto">Cadastro de Usuário</title>
        <meta name="description" content="Formulário de cadastro de usuário" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center"></h1>
        <CadastroForm />
      </main>
    </div>
  );
}