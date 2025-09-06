import Entrenador from "./entrenador"
import Socio from "./socio"


export default class Clase{

    private nombreClase:string;
    private horario:number;
    private entrenador:Entrenador;
    private capMax:number;
    //agregar al diagrama
    private costoClase:number;
    private alumnos:Socio[];

    constructor(entrenador:Entrenador){
        this.nombreClase="";
        this.horario=0;
        this.entrenador=entrenador;
        this.capMax=0;
        this.costoClase=0;
        this.alumnos=[];
    }


        public setNombreClase(nombreClase:string):void{
            this.nombreClase=nombreClase;
        }

        public getNombreClase():string{
            return this.nombreClase;
        }

        public getHorario():number{
            return this.horario;
        }

        public setHorario(hora:number):void{
            this.horario=hora;
        }
        

        public getEntrenador():Entrenador{
            return this.entrenador;
        }


         public setCapMax(cantSocios:number):void{
            this.capMax=cantSocios;
        }

        public getCapMax():number{
            return this.capMax;
        }

         public setcostoClase(claseMonto:number):void{
            this.costoClase=claseMonto;
        }

        public getCostoClase():number{
            return this.costoClase;
        }

        
        public estaCompleta():boolean{
           let completa:boolean=true;
            //agregar una excepcion con la cantidad de socios
            if(this.alumnos.length<this.capMax){
                completa=false;
            }
            return completa;
        }

        public getAlumnos():Socio[]{
            return this.alumnos;
        }
       
        public setAlumnos(alumno:Socio):void{
            if (!this.estaCompleta()) {
                this.alumnos.push(alumno);
            }
        }

       
}