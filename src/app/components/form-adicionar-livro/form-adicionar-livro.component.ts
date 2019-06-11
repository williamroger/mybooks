import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from 'src/app/providers/biblioteca.service';

@Component({
  selector: 'app-form-adicionar-livro',
  templateUrl: './form-adicionar-livro.component.html',
  styleUrls: ['./form-adicionar-livro.component.scss']
})
export class FormAdicionarLivroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private bibliotecaService: BibliotecaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      titulo: [null, Validators.required],
      autor: [null, Validators.required],
      edicao: [null],
      indicacao: [null],
      preco: [null],
      imagem: [null],
      descricao: [null],
      biblioteca: [1],
      lido: [0],
      usuario_id: [null, Validators.required],
      editora: [null],
    });
  }

  novoLivroBiblioteca() {
    this.bibliotecaService.insertLivro(this.formulario.value).subscribe(resposta => {
      this.formulario.reset();
      console.log('Cadastrado com sucesso');
    });
  }
}
