import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './components/menu-topo/menu-topo.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menuusuario.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { LivroComponent } from './components/livro/livro.component';
import { ListaDeDesejosComponent } from './pages/listadedesejos/listadedesejos.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { LidosComponent } from './pages/lidos/lidos.component';
import { routing } from './app.routing';
import { ListadesejosService } from './providers/listadesejos.service';
import { BibliotecaService } from './providers/biblioteca.service';
import { FormsearchbookComponent } from './components/formsearchbook/formsearchbook.component';
import { FormAdicionarLivroComponent } from './components/form-adicionar-livro/form-adicionar-livro.component';
import { FormDetailsBookComponent } from './components/formdetailsbook/formdetailsbook.component';
import { FormlendbookComponent } from './components/formlendbook/formlendbook.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    MenuUsuarioComponent,
    MenuPrincipalComponent,
    LivroComponent,
    ListaDeDesejosComponent,
    BibliotecaComponent,
    InformacoesComponent,
    LidosComponent,
    FormsearchbookComponent,
    FormAdicionarLivroComponent,
    FormDetailsBookComponent,
    FormlendbookComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [ListadesejosService, BibliotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
