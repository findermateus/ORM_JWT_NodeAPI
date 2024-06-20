import PersonRepository from "../Repository/personRepository.js";

class PersonController {
    static loadAll(req, res) {
        const result = PersonRepository.loadAll();
        res.status(200).json({ message: 'Requisição concluída.', result });
    }
    static create(req, res) {
        try {
            console.log(req.user);
            const data = req.body;
            const result = PersonRepository.create(data);
            res.status(201).json({ message: 'Pessoa criada com sucesso.', result });
        } catch (e) {
            res.status(400).json({ message: 'Erro ao criar pessoa.', result });
        }
    }
    static addCar(req, res) {
        const data = req.body;
        const result = PersonRepository.addCar(data);
        res.status(201).json({ message: 'Carro relacionado a pessoa com sucesso.', result });
    }
}

export default PersonController;