"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entrenador {
    nombre;
    especialidad;
    sociosAsignados;
    constructor() {
        this.nombre = "";
        this.especialidad = "";
        this.sociosAsignados = new Array();
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setEspecialidad(espe) {
        this.especialidad = espe;
    }
    getEspecialidad() {
        return this.especialidad;
    }
    setSociosAsignados(socio) {
        this.sociosAsignados.push(socio);
    }
    getSocioAsignado() {
        return this.sociosAsignados;
    }
}
exports.default = Entrenador;
//# sourceMappingURL=entrenador.js.map