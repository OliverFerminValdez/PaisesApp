import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './paises/Pages/por-capital/por-capital.component';
import { PorPaisComponent } from './paises/Pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/Pages/por-region/por-region.component';
import { VerPaisComponent } from './paises/Pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({

    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{

}