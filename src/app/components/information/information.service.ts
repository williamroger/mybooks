import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Book } from '../livro/book.model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getLendo() {
    return this.http.get<Book[]>(`${MYBOOKS_API}/lendo`);
  }

  getEmprestado() {
    return this.http.get<Book[]>(`${MYBOOKS_API}/emprestado`);
  }
}
