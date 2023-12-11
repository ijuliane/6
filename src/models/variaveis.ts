import { SistemaControle } from "./SistemaControle";

export class variaveis extends SistemaControle {
    dominio: string =''; //frequencia ou tempo
    malha:string = ''; //aberta ou fechada
    saida:string = '';  //sistema que deseja controlar

    constructor (dominio: string, malha: string, saida: string, processo:string, controlador:string,sensor: string){
        super(processo, controlador, sensor);
        this.dominio = dominio;
        this.malha = malha;
        this.saida = saida;
        this.processo = processo;
        this.controlador = controlador;
        this.sensor = sensor;
        
    }
}