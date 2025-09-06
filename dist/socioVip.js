"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socio_1 = __importDefault(require("../src/socio"));
class SocioVip extends socio_1.default {
    calcularCuotaMensual() {
        return this.cuotaMensual;
    }
}
exports.default = SocioVip;
//# sourceMappingURL=socioVip.js.map