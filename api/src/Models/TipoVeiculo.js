import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';

const TipoVeiculo = sequelize.define('TipoVeiculo', {
    cod_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    desc_tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default TipoVeiculo;
