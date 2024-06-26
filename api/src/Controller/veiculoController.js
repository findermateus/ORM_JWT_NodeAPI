import VeiculoRepository from "../Repository/veiculoRepository.js";

class VeiculoController {
    async loadAll(_, res) {
        try {
            const result = await VeiculoRepository.loadAll();
            res.status(200).json({ message: 'Requisição concluída.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao carregar veículo.', result });
        }
    }
    async loadByProprietario(req, res) {
        try {
            const data = req.body;
            const cpf = data.cpf;
            const result = await VeiculoRepository.loadByProprietario(cpf);
            res.status(200).json({ message: 'Veículo carregado com sucesso.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro carregar veículo.', result });
        }
    }
    async loadByTipo(req, res) {
        try {
            const data = req.body;
            const tipo = data.tipo;
            const result = await VeiculoRepository.loadByTipo(tipo);
            res.status(200).json({ message: 'Veículo carregado com sucesso.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro carregar veículo.', result });
        }
    }
    async create(req, res) {
        try {
            const data = req.body;
            await VeiculoRepository.create(data);
            res.status(201).json({ message: 'Veículo criado com sucesso.' });
        } catch (e) {
            res.status(400).json({ message: 'Erro ao criar veículo.' });
        }
    }
    async delete(req, res) {
        try {
            const data = req.body;
            const placa = data.placa;
            const result = await VeiculoRepository.delete(placa);
            res.status(200).json({ message: 'Veículo excluído com sucesso.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao excluir veículo.', result });
        }
    }
}

export default VeiculoController;