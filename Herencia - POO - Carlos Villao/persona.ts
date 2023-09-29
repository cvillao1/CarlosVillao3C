//Clas Madre. 
export class Persona{
    private nombre: string;
    private apellidos: string; 
    private id: number; 
    private estadoCivil: string; 
    constructor(nombre: string, apellidos: string, id: number, estadoCivil: string){
        this.nombre= nombre; 
        this.apellidos= apellidos;
        this.id= id;
        this.estadoCivil= estadoCivil;
    }
    public CambiarEstadoCivil(nuevoestadoCivil: string){
        this.estadoCivil= nuevoestadoCivil;
    }
    public ImprimirInfo(){
        console.log(`Nombre: ${this.nombre} Apellidos: ${this.apellidos}`);
        console.log(`Identificacion: ${this.id}`);
        console.log(`Estado Civil: ${this.estadoCivil}`);
    }
}

