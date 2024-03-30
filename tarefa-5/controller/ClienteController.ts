import Cliente from "../entities/Cliente";
import InMemoryRepository from "../repositories/InMemoryRepository";
import IClientRespository from "../repositories/interfaces/IClientRepository";

export default class ClienteController {
   
    constructor(private repository: IClientRespository) {}

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}