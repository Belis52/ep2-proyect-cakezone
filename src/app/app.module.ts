import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './pages/users/nosotros/nosotros.component';
import { PrincipalComponent } from './pages/users/principal/principal.component';
import { ContactoComponent } from './pages/users/contacto/contacto.component';
import { GaleriaComponent } from './pages/users/galeria/galeria.component';
import { DetalleProductoComponent } from './pages/users/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    PrincipalComponent,
    ContactoComponent,
    GaleriaComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
