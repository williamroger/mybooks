import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Book } from '../livro/book.model';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http: HttpClient) { }

  getRead() {
    return this.http.get<Book[]>(`${MYBOOKS_API}/lidos`);
  }
}
