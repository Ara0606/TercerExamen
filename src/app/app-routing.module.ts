import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { CovidComponent } from './covid/covid.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'conocenos',
    component:ConocenosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'cotizacion',
    component:CotizacionComponent
  },
  {
    path:'covid',
    component:CovidComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'novedades',
    component:NovedadesComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
