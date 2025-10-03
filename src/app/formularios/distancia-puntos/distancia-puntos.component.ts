import { Component } from '@angular/core';
import { operacionesDistancia } from './operacionesDistancia';

@Component({
  selector: 'app-distancia-puntos',
  standalone: false,
  templateUrl: './distancia-puntos.component.html',
  styleUrl: './distancia-puntos.component.css'
})
export class DistanciaPuntosComponent {
  op = new operacionesDistancia();
  equis1:number=0;
  ye1:number=0;
  equis2:number=0;
  ye2:number=0;
  resultado: any = null;

  calcular() {
    this.resultado = this.op.calcular(this.equis1, this.ye1, this.equis2, this.ye2)
  }
   
}