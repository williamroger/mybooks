import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input() livro: Livro;
  constructor() { }

  ngOnInit() {
  }

}
