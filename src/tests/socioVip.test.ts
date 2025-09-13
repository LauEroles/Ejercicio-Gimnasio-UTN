import SocioVip from "../socioVip"
import Socio from "../socio"
import PlanEntrenamiento from "../planEntrenamiento"
import Entrenador from "../entrenador"

describe("Prueba", ()=>{

  it("Calcular monto mensual correctamente",()=>{
    const id = 1;
    const entrenador1:Entrenador=new Entrenador(); 
    //porque es el as any???
    const planEntrenamiento:PlanEntrenamiento=new PlanEntrenamiento(null as any, entrenador1);
    const socioVip: Socio = new SocioVip(id,entrenador1,planEntrenamiento);

    //establezco una cuota mensual:
    socioVip.setCuotaMensual(5000);

    //Verificar que el calculo de la cuota mensual funcione:
    expect ((socioVip).calcularCuotaMensual()).toBe(5000);
    expect(socioVip).toBeInstanceOf(Socio);
  })

})
