import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/users/principal/principal.component';
import { NosotrosComponent } from './pages/users/nosotros/nosotros.component';
import { ContactoComponent } from './pages/users/contacto/contacto.component';
import { GaleriaComponent } from './pages/users/galeria/galeria.component';
import { DetalleProductoComponent } from './pages/users/detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
