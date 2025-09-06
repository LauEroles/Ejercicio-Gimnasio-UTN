

import Socio from "./socio"
import Entrenador from "./entrenador"

export default class PlanEntrenamiento{

    private nombreSocio: Socio;
    private nombreEntrenador: Entrenador;
    private detalle: string;

    constructor(nombreS: Socio, nombreE: Entrenador){
        this.nombreSocio = nombreS;
        this.nombreEntrenador = nombreE;
        this.detalle = "";
    }

    public setDescripcion(descripcion:string):void{
        this.detalle=descripcion;
    }

    public getDescripcion(): string{
         return this.detalle;
    }

    public getSocio(): Socio {
        return this.nombreSocio;
    }

    public getEntrenador(): Entrenador {
        return this.nombreEntrenador;
    }
}