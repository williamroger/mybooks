import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListaDeDesejosComponent } from './pages/listadedesejos/listadedesejos.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { LidosComponent } from './pages/lidos/lidos.component';

const APP_ROUTES: Routes = [
    {path: 'listadedesejos', component: ListaDeDesejosComponent},
    {path: 'biblioteca', component: BibliotecaComponent},
    {path: 'informacoes', component: InformacoesComponent},
    {path: 'lidos', component: LidosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
