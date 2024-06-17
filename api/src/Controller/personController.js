import Person from "../Entities/person.js";
import PersonRepository from "../Repository/personRepository.js";

class PersonController {
    static loadAll(req, res) {
        const result = PersonRepository.loadAll();
        res.status(200).json({ message: 'Requisição concluída.', result });
    }
    static create(req, res) {
        const data = req.body;
        const result = PersonRepository.create(data);
        res.status(201).json({ message: 'Pessoa criada com sucesso.', result });
    }
    static addCar(req, res) {
        const data = req.body;
        const result = PersonRepository.addCar(data);
        res.status(201).json({ message: 'Carro relacionado a pessoa com sucesso.', result });
    }
}

export default PersonController;