import { SistemaControle } from "./SistemaControle";

export class variaveis extends SistemaControle {
    dominio?: string =''; //frequencia ou tempo
    malha?:string = ''; //aberta ou fechada
    saida?:string = '';  //sistema que deseja controlar

    constructor (processo: string, sensor: string){
        super();
        this. processo = processo;
        this. sensor = sensor;  
    }
}