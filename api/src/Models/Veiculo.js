import { DataTypes } from 'sequelize';
import sequelize from '../Infrastructure/connection.js';
import Proprietario from './Proprietario.js';
import TipoVeiculo from './TipoVeiculo.js';

const Veiculo = sequelize.define('veiculo', {
    placa_veiculo: {
        type: DataTypes.STRING(10),
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
    id_tipo: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoVeiculo,
            key: 'cod_tipo'
        }
    },
    cpf_proprietario: {
        type: DataTypes.STRING(11),
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
        veiculo.id_tipo = 1; // simples
        return;
    }
    if (veiculo.preco_veiculo >= 50000 && veiculo.preco_veiculo < 100000) {
        veiculo.id_tipo = 2; // Luxo
        return;
    }
    veiculo.id_tipo = 3; // Super Luxo
});

export default Veiculo;
