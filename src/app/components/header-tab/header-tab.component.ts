import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  titulo = 'Livros que desejo comprar';
  textoBotao = 'Adicionar novo livro';

  constructor() { }

  ngOnInit() {
  }

}
