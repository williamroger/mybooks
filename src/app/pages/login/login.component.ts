import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logopath = 'assets/images/mybooks.png';
  formLogin: FormGroup;
  usuario: Usuario;
  usuarioAutenticado = false;

  constructor(private usuarioService: UsuariosService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormLogin();
  }

  configurarFormLogin() {
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  loginUsuario() {
    this.usuarioService.validarUsuario(this.formLogin.value).subscribe(data => {
      if (data.success) {
        alert(data.message);
        this.formLogin.reset();
        this.router.navigate(['/cadastro']);
      } else {
        alert(data.message);
      }
    });
  }
}
