import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logopath = 'assets/images/mybooks.png';
  formLogin: FormGroup;
  @Output() usuario: Usuario;
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
  // Link
  // https://medium.com/@danilodev.silva/angular-5-eventemitter-aprendendo-a-usar-input-e-output-property-56df9158de6b
  // https://www.youtube.com/watch?v=bOoddUeklZY&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=64
  // Descompactor P7zip
  loginUsuario() {
    this.usuarioService.validarUsuario(this.formLogin.value).subscribe(resposta => {
      this.formLogin.reset();
      console.log(data)
    });
  }
}
