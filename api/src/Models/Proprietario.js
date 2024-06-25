import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';

const Proprietario = sequelize.define('proprietario', {
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
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

export default Proprietario;
