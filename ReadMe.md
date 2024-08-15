
# Titulo

Project NitroNews

# Ferramentas usadas

Vite + ReactJS + Javascript 
Next + ReactJS + TypeScript

# Descrição

Este repositório contém um projeto dividido em três branches, cada uma representando uma parte diferente da aplicação:

master: Backend do projeto, rodando em Docker.
vite-app: Frontend utilizando Vite.js com JavaScript puro.
next-app: Frontend utilizando React, Next.js e TypeScript.

# Observações 
Certifique-se de que o backend esteja em execução antes de testar as funcionalidades completas do frontend.
Cada branch foi projetada para servir como uma aplicação independente, mas todas se integram para formar o projeto completo.

## Instalação do backend com Docker

git clone https://github.com/ivanmartins090317/project_nitroNews.git

Depois de clonar, você pode navegar entre as branches para acessar as diferentes partes do projeto.

git checkout master

docker build --tag 'backend_teste_tecnico' 

docker run -p 8080:8080 backend_teste_tecnico

O servidor estará disponível no endereço 

http://localhost:8080

## Instalação do front-end com Vite.Js

Configuração e Inicialização do Frontend Vite.js (Branch vite-app)

git checkout vite-app

git checkout vite-app

npm run dev

## Instalação do front-end com Next.Js

Configuração e Inicialização do Frontend Next.js (Branch next-app)

git checkout next-app

npm install

npm run dev
## Autores

- [Ivan Martins] https://www.linkedin.com/in/ivan-roberto-220ab310b/


## Funçoes

Envio e validação de formulario


## Melhorias

• Criar um layout no Figma
• Rafatorar o codigo
• Criar uma estrutura de teste

