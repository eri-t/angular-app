import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { VerduraComponent } from './verdura/verdura.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    VerduraComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    routing
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
