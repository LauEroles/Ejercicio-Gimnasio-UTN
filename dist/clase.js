"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clase {
    nombreClase;
    horario;
    entrenador;
    capMax;
    costoClase;
    alumnos;
    constructor(entrenador) {
        this.nombreClase = "";
        this.horario = 0;
        this.entrenador = entrenador;
        this.capMax = 0;
        this.costoClase = 0;
        this.alumnos = [];
    }
    setNombreClase(nombreClase) {
        this.nombreClase = nombreClase;
    }
    getNombreClase() {
        return this.nombreClase;
    }
    getHorario() {
        return this.horario;
    }
    setHorario(hora) {
        this.horario = hora;
    }
    getEntrenador() {
        return this.entrenador;
    }
    setCapMax(cantSocios) {
        this.capMax = cantSocios;
    }
    getCapMax() {
        return this.capMax;
    }
    setcostoClase(claseMonto) {
        this.costoClase = claseMonto;
    }
    getCostoClase() {
        return this.costoClase;
    }
    estaCompleta() {
        let completa = true;
        if (this.alumnos.length < this.capMax) {
            completa = false;
        }
        return completa;
    }
    getAlumnos() {
        return this.alumnos;
    }
    setAlumnos(alumno) {
        if (!this.estaCompleta()) {
            this.alumnos.push(alumno);
        }
    }
}
exports.default = Clase;
//# sourceMappingURL=clase.js.map