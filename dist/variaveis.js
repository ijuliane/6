"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SistemaControle_1 = require("./SistemaControle");
class Variaveis extends SistemaControle_1.SistemaControle {
    constructor() {
        super(...arguments);
        this.dominio = ''; //frequencia ou tempo
        this.malha = ''; //aberta ou fechada
        this.saida = ''; //sistema que deseja controlar
    }
}
