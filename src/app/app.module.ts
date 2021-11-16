import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './barra/barra.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ProductosComponent } from './productos/productos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CovidComponent } from './covid/covid.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    ConocenosComponent,
    ProductosComponent,
    GaleriaComponent,
    NovedadesComponent,
    ContactoComponent,
    CovidComponent,
    CotizacionComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
