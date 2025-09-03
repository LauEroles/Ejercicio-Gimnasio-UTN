
import PlanEntrenamiento from "./planEntrenamiento"

export default abstract class Socio{

   
    private id:number;
    protected cuotaMensual:number;
    private nombre:string;
    private planEntrenamiento:PlanEntrenamiento;


    constructor(id: number,pEntrenamiento:PlanEntrenamiento){
        this.id=id;
        this.cuotaMensual=0;
        this.nombre="";
        this.planEntrenamiento=pEntrenamiento;
    }



    public getId():number{
        return this.id;
    }

    public setCuotaMensual(cuota:number):void{
        this.cuotaMensual=cuota;
    }

    public getCuotaMensual():number{
        return this.cuotaMensual;
    }

    public setNombre(socio:string):void{
        this.nombre=socio;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getPlanEntrenamiento():PlanEntrenamiento{
        return this.planEntrenamiento;
    }

    public abstract calcularCuotaMensual():number;


}