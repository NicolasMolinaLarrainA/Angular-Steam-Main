import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoComponent } from './videojuego-componente/videojuego.component';

const routes: Routes = [
  { path: '', component: VideojuegoComponent }
]

@NgModule({
  declarations: [
    VideojuegoComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class VideojuegoModule { }
