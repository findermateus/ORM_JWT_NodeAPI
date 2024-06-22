import connection from "../Infrastructure/connection.js";

class VeiculoRepository {
    loadAll() {
        // consulta
        return true;
    }
    loadByProprietario(cpf) {
        //select * from veiculo where proprietario=cpf
        return true;
    }
    create(veiculoData) {
        // insert
        return result;
    }
}

const veiculoRepository = new VeiculoRepository();

export default veiculoRepository;