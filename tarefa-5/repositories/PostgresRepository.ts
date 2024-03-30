import Cliente from "../entities/Cliente";
import IClientRespository from "./interfaces/IClientRepository";

export default class PostgresRepository implements IClientRespository {
  private db: Record<number, Cliente>;

  constructor() {
    this.db = {};
  }

  adicionaCliente(cliente: Cliente) {
    this.add(cliente)
  }
  listaClientes() {
    return this.list()
  }

  add(cliente: Cliente) {
    this.db[cliente.id] = cliente;
  }

  list() {
    const clientes: Cliente[] = [];

    for (const chave in this.db) {
      if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
        clientes.push(this.db[chave]);
      }
    }

    return clientes;
  }
}
