import Person from "../Entities/proprietario.js";
import connection from "../infrastructure/connection.js";

class PersonRepository {
    static async loadAll() {
        const sql = "SELECT * FROM person;"
        const result = await executeQuery(sql);

        return result;
    }
    static async create(personData) {
        const person = new Person(personData.name, personData.cpf, personData.phone);
        const sql = "INSERT INTO person (name, cpf, phone) VALUES(?, ?, ?);";
        const values = [person.name, person.cpf, person.phone];
        const result = await executeQuery(sql, values);

        return result;
    }
}


export default PersonRepository;