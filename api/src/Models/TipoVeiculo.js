import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';

const TipoVeiculo = sequelize.define('TipoVeiculo', {
    id_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default TipoVeiculo;
