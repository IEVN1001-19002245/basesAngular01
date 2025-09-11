import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'David Amador Gutierrez';

  duplicarNumero(valor:number):number{
    return valor*2;
  }
  pelicula={
    titulo:"El Padrino",
    anio:1972,
    genero:"Crimen/Drama",
  }


}
