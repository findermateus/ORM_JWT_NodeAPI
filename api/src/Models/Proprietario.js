import sequelize from '../infrastructure/connection.js';

const Proprietario = sequelize.define('Proprietario', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Proprietario;
