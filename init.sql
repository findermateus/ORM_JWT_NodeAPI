    CREATE DATABASE IF NOT EXISTS concessionaria;
    USE concessionaria;
    
    CREATE TABLE IF NOT EXISTS person(
        cod_person INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(60) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        phone VARCHAR(11) 
    );

    CREATE TABLE IF NOT EXISTS user(
        cod_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(60),
        password VARCHAR(60)
    );
