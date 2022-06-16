import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponenteComponent } from './incio-componente/incio-componente.component';

const routes: Routes = [
  { path: '', component: IncioComponenteComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    NgbModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    IncioComponenteComponent
  ],
  exports:[],
  providers:[]
})
export class InicioModule { }
