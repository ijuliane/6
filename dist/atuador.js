"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SistemaControle_1 = require("./SistemaControle");
class Atuador extends SistemaControle_1.SistemaControle {
    constructor() {
        super(...arguments);
        this.energia = ''; //elétricos, pneumaticos, hidraulicos
        this.acao = ''; //linear, rotativa, angular
    }
}
