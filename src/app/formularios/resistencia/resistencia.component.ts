import { Component } from '@angular/core';
import { OperacionesResistencia } from './operacionesResistencia';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  color1: string = '';
  color2: string = '';
  multiplicador: string = '';
  tolerancia: string = '';

  resultado: any = null;

  private calculadora: OperacionesResistencia = new OperacionesResistencia();

  procesar() {
    this.calculadora.setBandas(this.color1, this.color2, this.multiplicador, this.tolerancia);
    this.resultado = this.calculadora.calcularValor();
  }

  limpiar() {
    this.color1 = '';
    this.color2 = '';
    this.multiplicador = '';
    this.tolerancia = '';
    this.resultado = null;
  }
}
