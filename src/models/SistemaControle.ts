export class SistemaControle {
    processo?: string = 'resfriamento'; //resfriamento de uma placa
    controlador?: string = ''; //arduino
    sensor?: string = ''; //sensor ultrassonico e temp

    constructor (processo: string, controlador: string, sensor: string){
        this.processo = processo;
        this.controlador = controlador;
        this.sensor = sensor;
    }
}
