import { SistemaControle } from "./SistemaControle";

export class atuador extends SistemaControle {
    energia: string = ''; //elétricos, pneumaticos, hidraulicos
    acao: string = ''; //linear, rotativa, angular

}