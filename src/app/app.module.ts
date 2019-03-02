import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { UserBoxComponent } from './components/header-menu/user-box/user-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    UserBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
