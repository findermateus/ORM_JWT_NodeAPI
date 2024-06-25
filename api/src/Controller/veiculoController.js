import VeiculoRepository from "../Repository/veiculoRepository.js";

class VeiculoController {
    loadAll(_, res) {
        try {
            const result = VeiculoRepository.loadAll();
            res.status(200).json({ message: 'Requisição concluída.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao carregar veículo.', result });
        }
    }
    loadByProprietario(req, res) {
        try {
            const data = req.body;
            const cpf = data.cpf;
            const result = VeiculoRepository.loadByProprietario(cpf);
            res.status(200).json({ message: 'Veículo carregado com sucesso.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro carregar veículo.', result });
        }
    }
    create(req, res) {
        try {
            const data = req.body;
            const result = VeiculoRepository.create(data);
            res.status(201).json({ message: 'Veículo criado com sucesso.' });
        } catch (e) {
            res.status(400).json({ message: 'Erro ao criar veículo.' });
        }
    }
    delete(req, res) {
        try {
            const data = req.body;
            const placa = data.placa;
            const result = VeiculoRepository.delete(placa);
            res.status(200).json({ message: 'Veículo excluído com sucesso.', result });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao excluir veículo.', result });
        }
    }
}

export default VeiculoController;