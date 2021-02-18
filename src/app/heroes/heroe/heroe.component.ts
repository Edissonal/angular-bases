import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl:'heroe.component.html',
})
export class HeroeComponent{
  
  nombre: string = 'iron man';
  edad: number = 45;

  obtenernombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado():string {

    return this.nombre.toUpperCase();
  }

  cambiarnombre():void {
    this.nombre = 'spiderman';

  }

  cambiarEdad() {
    this.edad = 30;
  }

}