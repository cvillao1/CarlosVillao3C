import { PersonalServicio } from "./personalservicio";
export class Empleado extends PersonalServicio{
    private seccionAsignada: string; 
    constructor(nombre:string, apellidos:string, id:number, 
        estadoCivil:string, aniodeincorporacion:number, numerodespacho:number, seccionAsignada: string){
        super(nombre, apellidos, id, estadoCivil, aniodeincorporacion, numerodespacho);
        this.seccionAsignada= seccionAsignada; 
    }
    public CambiarSeccion(nuevaSeccion: string){
        this.seccionAsignada= nuevaSeccion; 
    }
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Seccion Asignada: ${this.seccionAsignada}`);
    }
}

