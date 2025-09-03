import Socio from  "./socio"
import Clase from  "./clase"
import PlanEntrenamiento from  "./planEntrenamiento"

export default class SocioRegular extends Socio{

    private clasesAdicionales: Clase[];

    constructor(id:number, planE:PlanEntrenamiento){
        super(id,planE);
        this.clasesAdicionales=new Array<Clase>();
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