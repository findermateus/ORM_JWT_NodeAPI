import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';
import Proprietario from './Proprietario.js';

const Veiculo = sequelize.define('veiculo', {
    placa_veiculo: {
        type: DataTypes.STRING(25),
        primaryKey: true
    },
    modelo_veiculo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco_veiculo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    tipo_veiculo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proprietario: {
        type: DataTypes.STRING(12),
        references: {
            model: Proprietario,
            key: 'cpf'
        }
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

Veiculo.beforeCreate(async (veiculo, _) => {
    if (veiculo.preco_veiculo < 50000) {
        veiculo.tipo_veiculo = 1;
        return;
    }
    if (veiculo.preco_veiculo < 100000) {
        veiculo.tipo_veiculo = 2;
        return
    }
    veiculo.tipo_veiculo = 3;
});

export default Veiculo;
