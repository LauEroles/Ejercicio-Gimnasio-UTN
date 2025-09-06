"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Socio {
    id;
    cuotaMensual;
    nombre;
    planEntrenamiento;
    entrenador;
    constructor(id, entrenador, pEntrenamiento) {
        this.id = id;
        this.cuotaMensual = 0;
        this.nombre = "";
        this.entrenador = entrenador;
        this.planEntrenamiento = pEntrenamiento ?? undefined;
    }
    getId() {
        return this.id;
    }
    setCuotaMensual(cuota) {
        this.cuotaMensual = cuota;
    }
    getCuotaMensual() {
        return this.cuotaMensual;
    }
    setNombre(socio) {
        this.nombre = socio;
    }
    getNombre() {
        return this.nombre;
    }
    getPlanEntrenamiento() {
        return this.planEntrenamiento;
    }
    setPlanentrenamiento(pEntrenamiento) {
        this.planEntrenamiento = pEntrenamiento;
    }
    setEntrenador(entrenador) {
        this.entrenador = entrenador;
    }
    getEntrenador() {
        return this.entrenador;
    }
}
exports.default = Socio;
//# sourceMappingURL=socio.js.map