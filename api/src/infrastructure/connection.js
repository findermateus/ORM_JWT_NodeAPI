import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('concessionaria', 'mateus', '123', {
    host: 'localhost',
    dialect: 'mysql'
});

connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida');
    } catch (error) {
        console.error('Erro bro, você errou brow');
    }
}

export default connection;