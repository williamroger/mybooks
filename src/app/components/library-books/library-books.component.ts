import { Component, OnInit } from '@angular/core';
import { Book } from '../livro/book.model';
import { LibrarybooksService } from './librarybooks.service';

@Component({
  selector: 'app-librar-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.scss']
})
export class LibraryBooksComponent implements OnInit {

  libraryBooks: Book[];

  constructor(private libraryBooksService: LibrarybooksService) { }

  ngOnInit() {
    this.libraryBooksService.getLibraryBooks().subscribe(data => this.libraryBooks = data);
  }

}
