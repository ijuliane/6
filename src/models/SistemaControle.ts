//classe pai
//utilizando o conceito de encapsulamento no Sensor com PRIVATE

export class SistemaControle {
    processo?: string = 'resfriamento'; //resfriamento de uma placa
    controlador?: string = ''; //arduino
    private sensor?: string = ''; //sensor ultrassonico e temp

    constructor (processo: string, controlador: string, sensor: string){
        this.processo = processo;
        this.controlador = controlador;
        this.sensor = sensor;
    }
    
    falar(){
        console.log('Sistemas de Controle');
    }

    getSensor(){
        return this.sensor
    }

    setSensor(sensor:string){
        this.sensor = sensor;
    }
}

