"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variaveis = void 0;
const SistemaControle_1 = require("./SistemaControle");
class variaveis extends SistemaControle_1.SistemaControle {
    constructor(processo, sensor) {
        super();
        this.dominio = ''; //frequencia ou tempo
        this.malha = ''; //aberta ou fechada
        this.saida = ''; //sistema que deseja controlar
        this.processo = processo;
        this.sensor = sensor;
    }
}
exports.variaveis = variaveis;
