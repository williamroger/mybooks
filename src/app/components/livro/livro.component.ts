import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {
  title = 'A menina que roubava livros';
  author = 'Dj alma';
  edition = 'Edição 1';

  constructor() { }

  ngOnInit() {
  }

}
