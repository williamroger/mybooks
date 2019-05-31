import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListaDeDesejosComponent } from './pages/listadedesejos/listadedesejos.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { LidosComponent } from './pages/lidos/lidos.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Error404Component } from './pages/error404/error404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: DashboardComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'listadedesejos', component: ListaDeDesejosComponent},
    {path: 'biblioteca', component: BibliotecaComponent},
    {path: 'informacoes', component: InformacoesComponent},
    {path: 'lidos', component: LidosComponent},
    {path: '**', component: Error404Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
