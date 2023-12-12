"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variaveis = void 0;
const SistemaControle_1 = require("./SistemaControle");
class variaveis extends SistemaControle_1.SistemaControle {
    constructor(dominio, malha, saida, processo, controlador, sensor) {
        super(processo, controlador, sensor);
        this.dominio = ''; //frequencia ou tempo
        this.malha = ''; //aberta ou fechada
        this.saida = ''; //sistema que deseja controlar
        this.dominio = dominio;
        this.malha = malha;
        this.saida = saida;
        this.processo = processo;
        this.controlador = controlador;
        this.sensor = sensor;
    }
    falar() {
        console.log('Variaveis do sistema');
    }
}
exports.variaveis = variaveis;
