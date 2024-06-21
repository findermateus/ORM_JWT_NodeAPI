Projeto referente a N3 da disciplina de Server Side, na terceira fase de engenharia de software na católica SC.
# Iniciando o banco de dados
## Comandos no terminal:
- docker build -t mysql_db .
- docker run mysql_db
## HOST
Por se tratar de um container e não um host fixo, talvez o ip não esteja correto, para isso, após iniciar o container confira o ip, e se necessário o ajuste no .env:
- docker inspect nome-container
