import Cliente from "../../entities/Cliente"

interface IClientRespository {
    adicionaCliente(cliente: Cliente): void 
    listaClientes() : Cliente[]
}

export default IClientRespository