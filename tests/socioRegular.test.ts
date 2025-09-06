
import Entrenador from "../src/entrenador"
import PlanEntrenamiento from "../src/planEntrenamiento"
import Socio from "../src/socio"
import SocioRegular from "../src/socioRegular"
import Gimnasio from "../src/gimnasio"
import Clase from "../src/clase"

describe("Prueba", ()=>{

    const id:number=2;
    const entrenador2:Entrenador=new Entrenador();
    const planEntrenamiento2:PlanEntrenamiento= new PlanEntrenamiento(null as any, entrenador2);
    const socioRegular:Socio=new SocioRegular(id, entrenador2, planEntrenamiento2);
    const gim:Gimnasio=new Gimnasio();
    const clase:Clase=new Clase(new Entrenador());

    gim.inscribirSocio(clase,socioRegular);

    

})