import { BrowserModule } from '@angular/platform-browser';
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
    ReadComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
