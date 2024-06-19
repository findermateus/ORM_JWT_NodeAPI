import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('concessionaria', 'root', null, {
    host: '172.18.0.2',
    dialect: 'mysql'
});

await sequelize.authenticate();

export default sequelize;
