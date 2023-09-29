import { Persona } from "./persona";
import { Estudiante } from "./estudiante";
import { PersonalServicio } from "./personalservicio";
import { Profesor } from "./profesor";

const persona1 = new Persona ("Dante", "Villao Mantuano", 1314500396, "Soltero");
persona1.ImprimirInfo();
persona1.CambiarEstadoCivil("Casado");
persona1.ImprimirInfo();

const estudiante1= new Estudiante("David", "Perez Anchundia", 2823823238, "Casado", 3);
estudiante1.ImprimirInfo();
estudiante1.MatriculacionNuevoCurso(4);
estudiante1.ImprimirInfo();

const profesor1 = new Profesor("Edgardo", "Panchana Flores", 23020302302, "Casado", 2020, 23, "Programacion");
profesor1.ImprimirInfo();
profesor1.CambioDepartamentoProfesor("Matematicas");
profesor1.ImprimirInfo();

const personalservicio1= new PersonalServicio("Maria", "Mantuano Mero", 1309578449, "Casada", 2019, 25);
personalservicio1.ImprimirInfo();
