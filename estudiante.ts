import { Persona } from "./persona";
export class Estudiante extends Persona{
    public curso: number;
    constructor(nombre:string, apellidos:string, id:number, 
        estadoCivil:string, curso:number){
        super(nombre, apellidos, id, estadoCivil);
        this.curso=curso; 
    }
    public CambiarEstadoCivil(){}
    public MatriculacionNuevoCurso(nuevoCurso: number){
        this.curso= nuevoCurso; 
    }
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Curso Matriculado: ${this.curso}`);
    }

}