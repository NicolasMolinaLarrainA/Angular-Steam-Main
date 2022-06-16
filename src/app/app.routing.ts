import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InicioModule } from './inicio/inicio.module';
import { VideojuegoModule } from './videojuego/videojuego.module';
import { VideojuegoDetalleModule } from './videojuego-detalle/videojuego-detalle.module';

export const routes: Routes =[

    { path: 'videojuegodetalle', loadChildren: () => import('./videojuego-detalle/videojuego-detalle.module').then(m => m.VideojuegoDetalleModule) },
    { path: 'videojuego', loadChildren: () => import('./videojuego/videojuego.module').then(m => m.VideojuegoModule) },
    { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }

]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { 
  
}
