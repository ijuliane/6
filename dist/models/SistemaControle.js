"use strict";
//classe pai
//utilizando o conceito de encapsulamento no Sensor com PRIVATE
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaControle = void 0;
class SistemaControle {
    constructor(processo, controlador, sensor) {
        this.processo = 'resfriamento'; //resfriamento de uma placa
        this.controlador = ''; //arduino
        this.sensor = ''; //sensor ultrassonico e temp
        this.processo = processo;
        this.controlador = controlador;
        this.sensor = sensor;
    }
    falar() {
        console.log('Sistemas de Controle');
    }
    getSensor() {
        return this.sensor;
    }
    setSensor(sensor) {
        this.sensor = sensor;
    }
}
exports.SistemaControle = SistemaControle;
