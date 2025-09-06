"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socio_1 = __importDefault(require("./socio"));
class SocioRegular extends socio_1.default {
    clasesAdicionales;
    constructor(id, planE, entrenador) {
        super(id, entrenador);
        this.clasesAdicionales = new Array();
    }
    calcularCuotaMensual() {
        let acumulador = 0;
        this.clasesAdicionales.forEach((clase) => {
            acumulador += clase.getCostoClase();
        });
        let cuotaTotal = this.cuotaMensual + acumulador;
        return cuotaTotal;
    }
}
exports.default = SocioRegular;
//# sourceMappingURL=socioRegular.js.map