import { Persona } from "./persona";
import { Estudiante } from "./estudiante";
import { PersonalServicio } from "./personalservicio";
import { Profesor } from "./profesor";
import {Empleado} from "./empleado";

console.log("Persona:");
const persona1 = new Persona ("Dante", "Villao Mantuano", 1314500396, "Soltero");
persona1.ImprimirInfo();
persona1.CambiarEstadoCivil("Casado");
persona1.ImprimirInfo();

console.log("Estudiante: ");
const estudiante1= new Estudiante("David", "Perez Anchundia", 2823823238, "Casado", "3er");
estudiante1.ImprimirInfo();
estudiante1.MatriculacionNuevoCurso("4to");
estudiante1.ImprimirInfo();

console.log("Profesor ");
const profesor1 = new Profesor("Edgardo", "Panchana Flores", 23020302302, "Casado", 2020, 23, "Programacion");
profesor1.ImprimirInfo();
profesor1.CambioDepartamentoProfesor("Matematicas");
profesor1.ImprimirInfo();

console.log("Empleado: ");
const empleado1= new Empleado ("Juan", "Castillo Roca", 1203021302, "Casado", 2010, 40, "Literatura"); 
empleado1.ImprimirInfo(); 
empleado1.CambiarSeccion("Arquitectura");
empleado1.ImprimirInfo();

console.log ("PersonalServicio: ");
const personalservicio1= new PersonalServicio("Maria", "Mantuano Mero", 1309578449, "Casada", 2019, 25);
personalservicio1.ImprimirInfo();
