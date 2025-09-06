import Socio from "./socio"

export default class Entrenador{
    
    private nombre: string;
    private especialidad: string;
    private sociosAsignados: Socio[];

    constructor(){
        this.nombre = "";
        this.especialidad = "";
        this.sociosAsignados = new Array<Socio>();
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

    public setSociosAsignados(socio: Socio): void{
        this.sociosAsignados.push(socio);
    }

    public getSocioAsignado(): Socio[] {
        return this.sociosAsignados;
    }



}