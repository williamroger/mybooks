import { Component, OnInit } from '@angular/core';
import { Livro } from '../../components/livro/livro.model';
import { BibliotecaService } from '../../providers/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  livrosBiblioteca: Livro[];
  informacoesBiblioteca: string = "Você tem 145 livros em sua biblioteca";
  textoBotao: string = "Adicionar novo livro";

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.bibliotecaService.getBiblioteca()
      .subscribe(data => this.livrosBiblioteca = data);
  }

}
