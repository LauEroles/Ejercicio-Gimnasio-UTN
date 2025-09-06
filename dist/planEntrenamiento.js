"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlanEntrenamiento {
    nombreSocio;
    nombreEntrenador;
    detalle;
    constructor(nombreS, nombreE) {
        this.nombreSocio = nombreS;
        this.nombreEntrenador = nombreE;
        this.detalle = "";
    }
    setDescripcion(descripcion) {
        this.detalle = descripcion;
    }
    getDescripcion() {
        return this.detalle;
    }
    getSocio() {
        return this.nombreSocio;
    }
    getEntrenador() {
        return this.nombreEntrenador;
    }
}
exports.default = PlanEntrenamiento;
//# sourceMappingURL=planEntrenamiento.js.map