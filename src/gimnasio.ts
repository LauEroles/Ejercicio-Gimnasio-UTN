

import Socio from "./socio"
import Entrenador from "./entrenador"
import Clase from "./clase"



export default class Gimnasio{

    private socios:Socio[];
    private entrenadores: Entrenador[];
    private clases: Clase[];

    constructor(){

        this.socios=new Array<Socio>();
        this.entrenadores=new Array<Entrenador>();
        this.clases=new Array<Clase>();

    }

    public agregarSocio(socio:Socio):void{
        this.socios.push(socio);
    }

    public agregarEntrenador(entrenador:Entrenador):void{
        this.entrenadores.push(entrenador);
    }

    //Aqui hay que hacer un throw para hacer el manejo de la excepciòn
    public buscarClase(clase:Clase):Clase | undefined {
        
        let i: number = 0;
        let claseEncontrada: Clase | undefined = undefined;

        for (i; i < this.clases.length; i++)
            if (this.clases[i] === clase) {
                claseEncontrada = clase;
            }

        return claseEncontrada;
    }


    public buscarSocio(socio:Socio):Socio | undefined {
        
        let i: number = 0;
        let socioeEncontrado: Socio | undefined = undefined;

        for (i; i < this.socios.length; i++)
            if (this.socios[i] === socio) {
                socioeEncontrado = socio;
            }

        return socioeEncontrado;
    }

    public buscarSocioPorPosicion(socio:Socio):number {
        
        let i: number = 0;
        let socioeEncontrado: Socio | undefined = undefined;

        for (i; i < this.socios.length; i++)
            if (this.socios[i] === socio) {
                socioeEncontrado = socio;
            }

        return i;
    }

    public buscarEntrenadorPorPosicion(entrenador:Entrenador):number{

        let i: number = 0;
        let entrenadorEncontrado: Entrenador | undefined = undefined;

        for (i; i < this.entrenadores.length; i++)
            if (this.entrenadores[i] === entrenador) {
                entrenadorEncontrado = entrenador;
            }

        return i;

    }


      public buscarEntrenador(entrenador:Entrenador):Entrenador | undefined {
       
        let i: number = 0;
        let entrenadorEncontrado: Entrenador | undefined = undefined;

        for (i; i < this.entrenadores.length; i++)
            if (this.entrenadores[i] === entrenador) {
                entrenadorEncontrado = entrenador;
            }

        return entrenadorEncontrado;
    }


    public inscribirSocio(clase:Clase, socio:Socio):void{
       
        let claseBuscada:Clase |undefined = this.buscarClase(clase);
        let socioBuscado:Socio|undefined =this.buscarSocio(socio);

        this.clases.forEach((claseBuscada: Clase)=>{

        if (claseBuscada === undefined) {
            throw new Error("La clase que busca no existe");
        }
        if(claseBuscada.estaCompleta()){
            throw new Error("La clase a la que se quiere inscribir no dispone de cupos")
        } 
        else{   
            
            claseBuscada.setAlumnos(socio);
        }
        })

    }

    public asignarEntrenadorSocio(socio:Socio, entrenador:Entrenador):void{
        
        let socioBuscado:Socio|undefined=this.buscarSocio(socio);
        let entrenadorBuscado:Entrenador|undefined=this.buscarEntrenador(entrenador);

        
        if(entrenadorBuscado===undefined){
            throw new Error("El entrenador no puede ser null")
        }
        if(socioBuscado===undefined){
            throw new Error("El socio no puede ser null");

        }else{
            socioBuscado.setEntrenador(entrenador);

        }

    }




    public eliminarSocio(socio:Socio):void{
        let socioAEliminar:number=this.buscarSocioPorPosicion(socio);
        this.socios.splice(socioAEliminar, 1);

    }

     public eliminarEntrenador(entrenador:Entrenador):void{
        let entenadorAEliminar:number=this.buscarEntrenadorPorPosicion(entrenador);
        this.entrenadores.splice(entenadorAEliminar, 1);

    }

    
    public calcularTotalIngresoMensual():number{
        
        let montoTotal:number=0;
        this.socios.forEach((socio)=>{

            montoTotal+=socio.getCuotaMensual();

        })

        return montoTotal;
    }


}