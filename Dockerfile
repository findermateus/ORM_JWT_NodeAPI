FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=123

COPY ./init.sql /docker-entrypoint-initdb.d/
