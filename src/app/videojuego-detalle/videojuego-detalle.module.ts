import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoDetalleComponent } from './videojuego-detalle-componente/videojuego-detalle.component';

const routes: Routes = [
  { path: '', component: VideojuegoDetalleComponent }
]

@NgModule({
  declarations: [
    VideojuegoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NgbModule,
    RouterModule.forChild(routes),
  ],
  exports:[],
  providers:[]
})
export class VideojuegoDetalleModule { }
