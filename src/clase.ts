import Entrenador from "./entrenador"


export default class Clase{

    private nombreClase:string;
    private horario:number;
    private entrenador:Entrenador;
    private capMax:number;
    private costoClase:number;

    constructor(entrenador:Entrenador){
        this.nombreClase="";
        this.horario=0;
        this.entrenador=entrenador;
        this.capMax=0;
        this.costoClase=0;
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

        
        public estaCompleta(cantSocios:number):boolean{
           let completa:boolean=false;
            if(cantSocios>this.capMax){
                completa=true;
            }
            return completa;
        }
       

       
}