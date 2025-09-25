import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string = '';
  boletas:number = 1;
  compradores:number = 1;
  descuento:number = 0;
  cineco:boolean = false;
  resultado:string = '';
  total:number=0;
  precio:number = 12;

  procesar() {

    if (this.boletas < 1) {
      this.resultado = 'Debe comprar almenos un boleto';
      return;
    }else if(this.boletas > this.compradores * 7){
      this.resultado = 'No puede comprar esa cantidad de boletos';
      return;
    }

    this.total = this.boletas * this.precio;

    if (this.boletas > 5) {
      this.total *= 0.85;
    }else if (this.boletas >= 3) {
      this.total *= 0.90; 
    }

    if (this.cineco) {
      this.total *= 0.90;
    }
    this.resultado = `Nombre: ${this.nombre} Boletos: ${this.boletas} Valor a pagar: ${this.total} `;
  }

}