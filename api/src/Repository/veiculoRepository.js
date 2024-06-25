import Veiculo from '../Models/Veiculo.js';

class VeiculoRepository {
    async loadAll() {
        try {
            const veiculos = await Veiculo.findAll();
            return veiculos;
        } catch (error) {
            console.error('Erro ao carregar todos os veículos:', error);
            throw error;
        }
    }

    async loadByProprietario(cpf) {
        try {
            const veiculos = await Veiculo.findAll({
                where: {
                    cpf_proprietario: cpf
                }
            });
            return veiculos;
        } catch (error) {
            console.error('Erro ao carregar veículos por proprietário:', error);
            throw error;
        }
    }

    async create(veiculoData) {
        try {
            await Veiculo.create(veiculoData);
        } catch (error) {
            console.error('Erro ao criar veículo:', error);
            throw error;
        }
    }

    async delete(placa) {
        try {
            const result = await Veiculo.destroy({
                where: {
                    placa_veiculo: placa
                }
            });
            return result;
        } catch (error) {
            console.error('Erro ao excluir veículo:', error);
            throw error;
        }
    }
}

const veiculoRepository = new VeiculoRepository();

export default veiculoRepository;
