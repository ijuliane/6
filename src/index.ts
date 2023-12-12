
import { variaveis } from "./models/variaveis";


let us1: variaveis = new variaveis("tempo","fechada","placa resfriada","resfriamento", "arduino","ultrassonico");

us1.falar()
console.log("Sensor",us1.getSensor())

console.log('Objeto', us1);
