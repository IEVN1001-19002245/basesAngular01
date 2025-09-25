export class OperacionesResistencia {
  private banda1: number = 0;
  private banda2: number = 0;
  private multiplicador: number = 1;
  private tolerancia: number = 0;

  colores: { [key: string]: number } = {
    negro: 0,
    marron: 1,
    rojo: 2,
    naranja: 3,
    amarillo: 4,
    verde: 5,
    azul: 6,
    violeta: 7,
    gris: 8,
    blanco: 9
  };

  multiplicadores: { [key: string]: number } = {
    negro: 1,
    marron: 10,
    rojo: 100,
    naranja: 1000,
    amarillo: 10000,
    verde: 100000,
    azul: 1000000,
    dorado: 0.1,
    plateado: 0.01
  };

  tolerancias: { [key: string]: number } = {
    marron: 0.01,
    rojo: 0.02,
    verde: 0.005,
    azul: 0.0025,
    violeta: 0.001,
    gris: 0.0005,
    dorado: 0.05,
    plateado: 0.1
  };

  setBandas(color1: string, color2: string, mult: string, tol: string) {
    this.banda1 = this.colores[color1];
    this.banda2 = this.colores[color2];
    this.multiplicador = this.multiplicadores[mult];
    this.tolerancia = this.tolerancias[tol];
  }

  calcularValor(): { valor: number, max: number, min: number } {
    const base = (this.banda1 * 10 + this.banda2) * this.multiplicador;
    const max = base + (base * this.tolerancia);
    const min = base - (base * this.tolerancia);

    return {
      valor: base,
      max: max,
      min: min
    };
  }
}
