import { Component } from '@angular/core';
import { UsuariosService } from './providers/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myBooks';
  mostrarMenu: boolean = false;

  constructor(private usuarioService: UsuariosService) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.usuarioService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
