export class OperacionesResistencia {

  getBandas(): string[] {
    return [
      'negro', 'marron', 'rojo', 'naranja', 'amarillo',
      'verde', 'azul', 'morado', 'gris', 'blanco'
    ];
  }

  getTolerancias(): string[] {
    return ['dorado', 'plateado'];
  }

  getValor(color: string): number {
    switch (color) {
      case 'negro':
         return 0;
      case 'marron':
         return 1;
      case 'rojo':
         return 2;
      case 'naranja':
         return 3;
      case 'amarillo':
         return 4;
      case 'verde':
         return 5;
      case 'azul':
         return 6;
      case 'morado':
         return 7;
      case 'gris':
         return 8;
      case 'blanco':
         return 9;
      default:
         return 0;
    }
  }

  getMultiplicador(color: string): number {
    return Math.pow(10, this.getValor(color));
  }

  getTolerancia(color: string): number {
    switch (color) {
      case 'dorado':
         return 0.05;
      case 'plateado':
         return 0.10;
      default:
         return 0;
    }
  }

  getColorHex(color: string): string {
    switch (color) {
      case 'negro':
         return '#000000';
      case 'marron':
         return '#8B4513';
      case 'rojo':
         return '#FF0000';
      case 'naranja':
         return '#FFA500';
      case 'amarillo':
         return '#FFFF00';
      case 'verde':
         return '#008000';
      case 'azul':
         return '#0000FF';
      case 'morado':
         return '#800080';
      case 'gris':
         return '#808080';
      case 'blanco':
         return '#E8E8E8';
      case 'dorado':
         return '#FFD700';
      case 'plateado':
         return '#C0C0C0';
      default:
         return '#FFFFFF';
    }
  }

  calcular(b1: string, b2: string, b3: string, tol: string) {
    const base = (this.getValor(b1) * 10 + this.getValor(b2)) * this.getMultiplicador(b3);
    const tolerancia = this.getTolerancia(tol);
    return {
      banda1: b1,
      banda2: b2,
      banda3: b3,
      tolerancia: tol,
      valorBase: base,
      valorMax: base * (1 + tolerancia),
      valorMin: base * (1 - tolerancia)
    };
  }
}