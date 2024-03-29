import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
 
    constructor (private servicoCalculaSalario: CalculaSalario){}
    paga(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcula(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
   
}