import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { UserBoxComponent } from './components/header-menu/user-box/user-box.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { HeaderTabComponent } from './components/header-tab/header-tab.component';
import { LivroComponent } from './components/livro/livro.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LibraryBooksComponent } from './components/library-books/library-books.component';
import { InformationComponent } from './components/information/information.component';
import { ReadComponent } from './components/read/read.component';
import { routing } from './app.routing';
import { ListadesejosService } from './components/wishlist/listadesejos.service';
import { LibrarybooksService } from './components/library-books/librarybooks.service';
import { FormsearchbookComponent } from './components/wishlist/formsearchbook/formsearchbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    UserBoxComponent,
    MenuPrincipalComponent,
    HeaderTabComponent,
    LivroComponent,
    WishlistComponent,
    LibraryBooksComponent,
    InformationComponent,
    ReadComponent,
    FormsearchbookComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [ListadesejosService, LibrarybooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
