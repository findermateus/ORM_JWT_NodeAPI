import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';

const TipoVeiculo = sequelize.define('tipoVeiculo', {
    cod_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    desc_tipo: {
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

export default TipoVeiculo;
