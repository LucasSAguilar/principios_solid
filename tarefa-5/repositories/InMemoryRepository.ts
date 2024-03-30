import Cliente from "../entities/Cliente";
import IClientRespository from "./interfaces/IClientRepository";

export default class InMemoryRepository implements IClientRespository {
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionaCliente(cliente: Cliente) {
        this.db.push(cliente);
    }
    listaClientes() {
        return this.db;
    }
}