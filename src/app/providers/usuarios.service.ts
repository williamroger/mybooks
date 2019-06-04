import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  insertUsuario(usuario: Usuario) {
    return this.http.post<any>('/api/usuario/novousuario', usuario);
  }

  validarUsuario(usuario: Usuario) {
    return this.http.post<any>('/api/auth', usuario);
  }
}
