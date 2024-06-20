import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('concessionaria', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

await sequelize.authenticate();

export default sequelize;
