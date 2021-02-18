import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './herores/listado/listado.component';


@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ], exports:[
    ListadoComponent
  ],imports:[
    CommonModule
  ]


})
export class HeoresModule{}