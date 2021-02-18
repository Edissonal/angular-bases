import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  <span>{{titulo}}</span>
<h1>la base es <strong>{{base}}</strong></h1>

<button (click)="acumular(+base)">+1</button>
<span> {{numero}} </span>
<button (click)="acumular(-base)">-1</button>
  `
})
export class contadorComponent{ 

  titulo = 'Contador app';
  numero: number = 10;
  base: number = 5;
  acumular(valor:number) {
    this.numero += valor;
  }


}