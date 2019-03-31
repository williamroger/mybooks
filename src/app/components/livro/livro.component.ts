import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
