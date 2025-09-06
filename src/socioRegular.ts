import Socio from  "./socio"
import Clase from  "./clase"
import PlanEntrenamiento from  "./planEntrenamiento"
import Entrenador from "./entrenador"

export default class SocioRegular extends Socio{

    private clasesAdicionales: Clase[];

    constructor(id:number, entrenador:Entrenador,planE:PlanEntrenamiento){
        super(id,entrenador,planE);
        this.clasesAdicionales=new Array<Clase>();
    }

    public setClasesAdicionales(clase:Clase):void{
        this.clasesAdicionales.push(clase);
    }

    calcularCuotaMensual():number{

        let acumulador = 0;
        this.clasesAdicionales.forEach((clase) => {
            acumulador += clase.getCostoClase();
        });
        let cuotaTotal = this.cuotaMensual + acumulador;
        
        return cuotaTotal;



    }

}