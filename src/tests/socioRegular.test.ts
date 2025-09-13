
import Entrenador from "../entrenador"
import PlanEntrenamiento from "../planEntrenamiento"
import Socio from "../socio"
import SocioRegular from "../socioRegular"
import Gimnasio from "../gimnasio"
import Clase from "../clase"

describe("Prueba ", ()=>{


   it("clase calcularCuotaMensual", ()=>{

   const id:number=2;
   const entrenador2:Entrenador=new Entrenador();
   const planEntrenamiento2:PlanEntrenamiento= new PlanEntrenamiento(null as any, entrenador2);
   const socioRegular:Socio=new SocioRegular(id, entrenador2, planEntrenamiento2);
   const gim:Gimnasio=new Gimnasio();
   const clase1:Clase=new Clase(new Entrenador());
   const clase2:Clase=new Clase(new Entrenador());
   const clase3:Clase=new Clase(new Entrenador());

    gim.inscribirSocio(clase1,socioRegular);
    gim.inscribirSocio(clase2,socioRegular);
    gim.inscribirSocio(clase3,socioRegular);


   }) 
    

    
    

})