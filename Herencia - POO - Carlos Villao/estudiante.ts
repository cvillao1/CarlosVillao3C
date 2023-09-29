import { Persona } from "./persona";
export class Estudiante extends Persona{
    public curso: string;
    constructor(nombre:string, apellidos:string, id:number, 
        estadoCivil:string, curso:string){
        super(nombre, apellidos, id, estadoCivil);
        this.curso=curso; 
    }
    public CambiarEstadoCivil(){}
    public MatriculacionNuevoCurso(nuevoCurso: string){
        this.curso= nuevoCurso; 
    }
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Curso Matriculado: ${this.curso}`);
    }

}