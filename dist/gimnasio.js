"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gimnasio {
    socios;
    entrenadores;
    clases;
    constructor() {
        this.socios = new Array();
        this.entrenadores = new Array();
        this.clases = new Array();
    }
    agregarSocio(socio) {
        this.socios.push(socio);
    }
    agregarEntrenador(entrenador) {
        this.entrenadores.push(entrenador);
    }
    buscarClase(clase) {
        let i = 0;
        let claseEncontrada = undefined;
        for (i; i < this.clases.length; i++)
            if (this.clases[i] === clase) {
                claseEncontrada = clase;
            }
        return claseEncontrada;
    }
    buscarSocio(socio) {
        let i = 0;
        let socioeEncontrado = undefined;
        for (i; i < this.socios.length; i++)
            if (this.socios[i] === socio) {
                socioeEncontrado = socio;
            }
        return socioeEncontrado;
    }
    buscarSocioPorPosicion(socio) {
        let i = 0;
        let socioeEncontrado = undefined;
        for (i; i < this.socios.length; i++)
            if (this.socios[i] === socio) {
                socioeEncontrado = socio;
            }
        return i;
    }
    buscarEntrenadorPorPosicion(entrenador) {
        let i = 0;
        let entrenadorEncontrado = undefined;
        for (i; i < this.entrenadores.length; i++)
            if (this.entrenadores[i] === entrenador) {
                entrenadorEncontrado = entrenador;
            }
        return i;
    }
    buscarEntrenador(entrenador) {
        let i = 0;
        let entrenadorEncontrado = undefined;
        for (i; i < this.entrenadores.length; i++)
            if (this.entrenadores[i] === entrenador) {
                entrenadorEncontrado = entrenador;
            }
        return entrenadorEncontrado;
    }
    inscribirSocio(clase, socio) {
        let claseBuscada = this.buscarClase(clase);
        let socioBuscado = this.buscarSocio(socio);
        if (claseBuscada === undefined) {
            throw new Error("La clase que busca no existe");
        }
        if (claseBuscada.estaCompleta()) {
            throw new Error("La clase a la que se quiere inscribir no dispone de cupos");
        }
        else {
            claseBuscada.setAlumnos(socio);
        }
    }
    asignarEntrenadorSocio(socio, entrenador) {
        let socioBuscado = this.buscarSocio(socio);
        let entrenadorBuscado = this.buscarEntrenador(entrenador);
        if (entrenadorBuscado === undefined) {
            throw new Error("El entrenador no puede ser null");
        }
        if (socioBuscado === undefined) {
            throw new Error("El socio no puede ser null");
        }
        else {
            socioBuscado.setEntrenador(entrenador);
        }
    }
    eliminarSocio(socio) {
        let socioAEliminar = this.buscarSocioPorPosicion(socio);
        this.socios.splice(socioAEliminar, 1);
    }
    eliminarEntrenador(entrenador) {
        let entenadorAEliminar = this.buscarEntrenadorPorPosicion(entrenador);
        this.entrenadores.splice(entenadorAEliminar, 1);
    }
    calcularTotalIngresoMensual() {
        let montoTotal = 0;
        this.socios.forEach((socio) => {
            montoTotal += socio.getCuotaMensual();
        });
        return montoTotal;
    }
}
exports.default = Gimnasio;
//# sourceMappingURL=gimnasio.js.map