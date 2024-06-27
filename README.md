# Node API
A api foi construída utilizando express, jwt para autenticação e sequelize para ORM.
Projeto referente a N3 da disciplina de Server Side, na terceira fase de engenharia de software na católica SC, construída pensando nos seguintes requisitos:
>Desenvolver uma aplicação servidora em que o proprietário (cpf, nome e fone) possa ter um ou mais veículo (placa_veiculo, modelo_veiculo e preco_veiculo). Se o preço do veículo for maior ou igual a R$ 50.000,00 e menor R$ 100.000,00 associar à tabela tipo_veículo (id_tipo, tipo), o tipo luxo. Se for menor que R$ 50.000,00 associar popular. Do contrário associar super luxo. Para a implementação da persistência de dados, utilize a técnica de ORM - Object Relational Mapping. Essa aplicação tem que atender as requisições CRUD oriundas de qualquer cliente-server por meio de API Rest. Como também, permitir consultas de veículos por proprietário e tipo. Além disso, inserir a utilização de token (JWT) em um dos end-points da API ou se preferir adicione uma funcionalidade de login (usuário e senha) com token. 
## Rodando o projeto
* Banco de dados
```
docker build -t mysql_db .
docker run mysql_db
```
Por se tratar de um container e não um host fixo, talvez o ip não esteja correto, para isso, após iniciar o container confira o ip, e se necessário o ajuste no .env:
```
docker inspect <nome-container>
```
* API
```
cd server/
npm start
```
## Requisições
Para realizar as requisições http, está disponibilizado na pasta 'requisicoes' os arquivos com as configurações e rotas necessárias.
Sinta-se a vontade para testar, seja utlizando a extensão 'REST Client' disponibilizada no VS Code, ou com qualquer outra ferramenta.
