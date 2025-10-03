import { Component } from '@angular/core';
import { OperacionesResistencia } from './operacionesResistencia';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})

export class ResistenciaComponent {
  op = new OperacionesResistencia();  
  bandas = this.op.getBandas();
  tolerancias = this.op.getTolerancias();
  banda1 = this.bandas[0];
  banda2 = this.bandas[0];
  banda3 = this.bandas[0];
  tolerancia = this.tolerancias[0];
  resultado: any = null;

  calcular() {
    this.resultado = this.op.calcular(this.banda1, this.banda2, this.banda3, this.tolerancia);
  }

  estilo(color: string) {
    return {
      'background-color': this.op.getColorHex(color),
      'color': color === 'blanco' ? '#000' : '#fff',
      'padding': '4px',
      'text-align': 'center'
    };
  }
}
