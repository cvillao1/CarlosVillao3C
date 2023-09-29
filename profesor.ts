import { PersonalServicio } from "./personalservicio";
export class Profesor extends PersonalServicio{ 
    private departamento: string; 
    constructor( nombre:string, apellidos:string, id:number, 
        estadoCivil:string, aniodeincorporacion:number, numerodespacho:number, departamento: string){
            super(nombre, apellidos, id, estadoCivil, aniodeincorporacion, numerodespacho);
            this.departamento= departamento;
    }
    public CambioDepartamentoProfesor(nuevoDepartamento: string){
        this.departamento= nuevoDepartamento; 
    }
    public ReasignaciondeDespacho(){}
    
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Departamento Asignado: ${this.departamento}`); 
        
    }
   
}