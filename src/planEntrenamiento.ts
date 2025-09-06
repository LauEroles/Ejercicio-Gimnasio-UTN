

import { ISocio } from "./interfaces/ISocio";
import { IEntrenador } from "./interfaces/IEntrenador";

export default class PlanEntrenamiento{

    private nombreSocio: ISocio;
    private nombreEntrenador: IEntrenador;
    private detalle: string;

    constructor(nombreS: ISocio, nombreE: IEntrenador){
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

    public getSocio(): ISocio {
        return this.nombreSocio;
    }

    public getEntrenador(): IEntrenador {
        return this.nombreEntrenador;
    }
}