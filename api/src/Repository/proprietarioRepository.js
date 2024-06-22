import Proprietario from "../Entities/proprietario.js";
import connection from "../Infrastructure/connection.js";

class ProprietarioRepository {
    loadAll() {
        // consulta
        return true;
    }
    create(proprietarioData) {
        // insert
        return true;
    }
    delete(cpf) {
        //delete
        return true;
    }
}

const proprietarioRepository = new ProprietarioRepository();

export default proprietarioRepository;