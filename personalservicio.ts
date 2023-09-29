import { Persona } from "./persona";
export class PersonalServicio extends Persona{
     aniodeincorporacion: number; 
     numerodespacho: number; 

    constructor(nombre:string, apellidos:string, id:number, 
        estadoCivil:string, aniodeincorporacion:number, numerodespacho:number){
        super(nombre, apellidos, id, estadoCivil);
        this.aniodeincorporacion= aniodeincorporacion;
        this.numerodespacho=numerodespacho;

    }
    public Reasignaciondedespacho(nuevoDespacho: number){
        this.numerodespacho= nuevoDespacho;
    } 
    public TrasladodeSeccion(){}
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Año de incorporacion: ${this.aniodeincorporacion}`);
        console.log(`Numero de Despacho: ${this.numerodespacho}`);
    }
}


