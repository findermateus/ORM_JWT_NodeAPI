    CREATE DATABASE IF NOT EXISTS concessionaria;
    USE concessionaria;
    
    CREATE TABLE IF NOT EXISTS proprietarios (
        cpf VARCHAR(11) PRIMARY KEY NOT NULL,
        nome VARCHAR(60) NOT NULL,
        fone VARCHAR(11),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
    );

    CREATE TABLE IF NOT EXISTS veiculos (
        placa_veiculo VARCHAR(25) PRIMARY KEY NOT NULL,
        modelo_veiculo VARCHAR(60),
        preco_veiculo DECIMAL(8, 2),
        tipo_veiculo VARCHAR(60),
        proprietario VARCHAR(12),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user(
        cod_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(60),
        password VARCHAR(60)
    );
