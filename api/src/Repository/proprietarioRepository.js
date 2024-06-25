import Proprietario from '../Models/Proprietario.js';

class ProprietarioRepository {
    async loadAll() {
        try {
            const proprietarios = await Proprietario.findAll();
            return proprietarios;
        } catch (error) {
            console.error('Erro ao carregar todos os proprietários:', error);
            throw error;
        }
    }

    async create(proprietarioData) {
        try {
            await Proprietario.create(proprietarioData);
        } catch (error) {
            console.error('Erro ao criar proprietário:', error);
            throw error;
        }
    }

    async delete(cpf) {
        try {
            const result = await Proprietario.destroy({
                where: {
                    cpf: cpf
                }
            });
            return result;
        } catch (error) {
            console.error('Erro ao excluir proprietário:', error);
            throw error;
        }
    }
}

const proprietarioRepository = new ProprietarioRepository();

export default proprietarioRepository;
