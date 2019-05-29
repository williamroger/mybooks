import { Component, OnInit } from '@angular/core';
import { Book } from '../../components/livro/livro.model';
import { ListadesejosService } from '../../providers/listadesejos.service';

@Component({
  selector: 'app-listadedesejos',
  templateUrl: './listadedesejos.component.html',
  styleUrls: ['./listadedesejos.component.scss']
})
export class ListaDeDesejosComponent implements OnInit {

  listaDesejos: Book[];
  informacoesListaDeDesejos: string = "Você tem 145 livros em sua Lista de Desejos";
  textoBotao: string = "Adicionar novo livro";

  constructor(private listadesejosService: ListadesejosService) { }

  ngOnInit() {
    this.listadesejosService.getListaDesejos()
      .subscribe(data => this.listaDesejos = data);
  }

}
