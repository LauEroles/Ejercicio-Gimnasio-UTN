
import PlanEntrenamiento from "./planEntrenamiento"
import Entrenador from "./entrenador"

export default abstract class Socio{

   
    private id:number;
    protected cuotaMensual:number;
    private nombre:string;
    private planEntrenamiento:PlanEntrenamiento | undefined;
    //agregarlo en el diagrama
    private entrenador:Entrenador;


    constructor(id: number,entrenador:Entrenador, pEntrenamiento:PlanEntrenamiento){
        this.id=id;
        this.cuotaMensual=0;
        this.nombre="";
        this.entrenador=entrenador;
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

    public getPlanEntrenamiento():PlanEntrenamiento |undefined{
        return this.planEntrenamiento;
    }

    public setPlanentrenamiento(pEntrenamiento:PlanEntrenamiento):void{
        this.planEntrenamiento=pEntrenamiento;
    }

    public setEntrenador(entrenador:Entrenador):void{
        this.entrenador=entrenador;
    }

    public getEntrenador():Entrenador{
        return this.entrenador;
    }


    public abstract calcularCuotaMensual():number;


}