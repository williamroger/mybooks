import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LibraryBooksComponent } from './components/library-books/library-books.component';
import { InformationComponent } from './components/information/information.component';
import { ReadComponent } from './components/read/read.component';

const APP_ROUTES: Routes = [
    {path: '', component: WishlistComponent},
    {path: 'biblioteca', component: LibraryBooksComponent},
    {path: 'informacoes', component: InformationComponent},
    {path: 'lidos', component: ReadComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);