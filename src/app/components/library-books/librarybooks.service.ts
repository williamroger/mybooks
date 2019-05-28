import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Book } from '../livro/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibrarybooksService {

  constructor(private http: HttpClient) { }

  getLibraryBooks() {
    return this.http.get<Book[]>(`${MYBOOKS_API}/biblioteca/livros`);
  }
}
