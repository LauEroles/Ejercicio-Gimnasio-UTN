export interface ISocio {
    getId(): number;
    getNombre(): string;
    setNombre(nombre: string): void;
    getCuotaMensual(): number;
    setCuotaMensual(cuota: number): void;
    calcularCuotaMensual(): number;
}
