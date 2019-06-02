import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro.model';
import {LidosService} from '../../providers/lidos.service';

@Component({
  selector: 'app-lidos',
  templateUrl: './lidos.component.html',
  styleUrls: ['./lidos.component.scss']
})
export class LidosComponent implements OnInit {

  livrosLidos: Livro[];

  constructor(private lidosService: LidosService) { }

  ngOnInit() {
    this.lidosService.getLidos().subscribe(data => this.livrosLidos = data);
  }

}
