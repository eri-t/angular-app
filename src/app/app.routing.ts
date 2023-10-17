import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { EmpleadoComponent } from "./empleado/empleado.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { VerduraComponent } from "./verdura/verdura.component";
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'verdura', component: VerduraComponent},
    {path: 'verdura/:verdura', component: VerduraComponent},
    {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);