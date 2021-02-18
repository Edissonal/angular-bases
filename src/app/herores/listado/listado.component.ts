import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('contructor');
  }
  
  heroes: string[] = ['spiserman', 'ironman', 'Hulk', 'thor'];
  heroeborradoi: string = '';
  ngOnInit() {


  }

  borrar() {
   

    this.heroeborradoi = this.heroes.shift() || '';
 
  }

}
