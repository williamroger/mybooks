import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  logopath = 'assets/images/mybooks.png';
  formNovoUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormCadastro();
  }

  configurarFormCadastro() {
    this.formNovoUsuario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  salvarNovoUsuario(event) {
    console.log(event);
  }
}
