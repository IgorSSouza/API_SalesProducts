# Desenvolvido por Igor Souza

API Sales Products - Node JS, express, sequelize e mariadb

## Instalação do projeto

- Após baixar o projeto, você precisa abrir o terminal no local da pasta do arquivo e rodar o comando "npm i" sem as aspas para instalar as dependências.
- A API vai estar hospedada em um servidor de testes gratuito, esse é o código fonte mas caso queira rodar o projeto localmente entre em contato novamente que disponibilizarei o .env onde está localizado as variáveis de ambiente.

## Como foi o processo de desenvolvimento

- Fiz uma API REST iniando com as migrações e criando as tabelas no db usei o Sequelize como orm pois já tinha uma experiencia com ele e achei muito boa essa experiencia. O projeto foi organizado com rotas, controllers e models da parte do Login da aplicação e a parte do cadastro dos Produtos no db, na autenticação resolvi colocar um token de segurança para a validação do usuário, na parte do flutter ele armazena esse token em uma variável local e faz a validação.Fiz um metodo post para armazenar as informações do carrinho de compras no db.

Para verificar os produtos cadastrados você pode fazer uma requisição GET com esse link:

https://salesproductapi.onrender.com/vendas
