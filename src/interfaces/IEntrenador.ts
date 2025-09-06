import { ISocio } from './ISocio';

export interface IEntrenador {
    getNombre(): string;
    setNombre(nombre: string): void;
    getEspecialidad(): string;
    setEspecialidad(especialidad: string): void;
    setSociosAsignados(socio: ISocio): void;
    getSocioAsignado(): ISocio[];
}
