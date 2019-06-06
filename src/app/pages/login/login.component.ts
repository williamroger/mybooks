import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/providers/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logopath = 'assets/images/mybooks.png';
  formLogin: FormGroup;

  constructor(private usuarioService: UsuariosService, private formBuilder: FormBuilder) { }

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
    this.usuarioService.validarUsuario(this.formLogin.value);
  }
}
