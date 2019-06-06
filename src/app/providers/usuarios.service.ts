import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuario: Usuario;
  usuarioAutenticado = false;
  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router,) { }

  insertUsuario(usuario: Usuario) {
    return this.http.post<any>('/api/usuario/novousuario', usuario);
  }

  validarUsuario(usuario: Usuario) {
    return this.http.post<any>('/api/auth', usuario).subscribe(data => {
      if (data.success) {
        alert(data.message);
        // this.formLogin.reset();
        this.usuarioAutenticado = true;
        this.mostrarMenuEmmiter.emit(true);
        this.router.navigate(['/listadedesejos']);
      } else {
        this.mostrarMenuEmmiter.emit(false);
        alert(data.message);
      }
    });
  }
}
