
import { ISocio } from "./interfaces/ISocio";

export default class Entrenador{
    
    private nombre: string;
    private especialidad: string;
    private sociosAsignados: ISocio[];

    constructor(){
        this.nombre = "";
        this.especialidad = "";
        this.sociosAsignados = new Array<ISocio>();
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setEspecialidad(espe:string):void{
        this.especialidad=espe;
    }

    public getEspecialidad():string{
        return this.especialidad;
    }

    public setSociosAsignados(socio: ISocio): void{
        this.sociosAsignados.push(socio);
    }

    public getSocioAsignado(): ISocio[] {
        return this.sociosAsignados;
    }



}