import ProprietarioRepository from "../Repository/proprietarioRepository.js";

class ProprietarioController {
   async loadAll(req, res) {
      try {
         const result = await ProprietarioRepository.loadAll();
         res.status(200).json({ message: 'Requisição concluída.', result });
      } catch (error) {
         res.status(400).json({ message: 'Erro ao carregar proprietario.', result });
      }
   }
   async create(req, res) {
      try {
         const data = req.body;
         await ProprietarioRepository.create(data);
         res.status(201).json({ message: 'Proprietario criado com sucesso.' });
      } catch (e) {
         res.status(400).json({ message: 'Erro ao criar proprietario.' });
      }
   }
   async delete(req, res) {
      try {
         const data = req.body;
         const cpf = data.cpf;
         const result = await ProprietarioRepository.delete(cpf);
         res.status(200).json({ message: 'Proprietario excluído com sucesso.', result });
      } catch (error) {
         res.status(400).json({ message: 'Erro ao excluir proprietario.', result });
      }
   }
}

export default ProprietarioController;