"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variaveis_1 = require("./models/variaveis");
let us1 = new variaveis_1.variaveis("tempo", "fechada", "placa resfriada", "resfriamento", "arduino", "ultrassonico");
us1.falar();
console.log('Objeto', us1);
