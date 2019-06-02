import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro.model';
import { InformacoesService } from '../../providers/informacoes.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})
export class InformacoesComponent implements OnInit {

  livrosEmLeitura: Livro[];
  livrosEmprestados: Livro[];

  constructor(private informacoesService: InformacoesService) { }

  ngOnInit() {
    this.informacoesService.getLivrosEmLeitura().subscribe(data => this.livrosEmLeitura = data);
    this.informacoesService.getLivrosEmprestados().subscribe(data => this.livrosEmprestados = data);
  }

}
