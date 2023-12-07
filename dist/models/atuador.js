"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atuador = void 0;
const SistemaControle_1 = require("./SistemaControle");
class atuador extends SistemaControle_1.SistemaControle {
    constructor() {
        super(...arguments);
        this.energia = ''; //elétricos, pneumaticos, hidraulicos
        this.acao = ''; //linear, rotativa, angular
    }
}
exports.atuador = atuador;
