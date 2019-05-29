import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Livro } from '../components/livro/livro.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http: HttpClient) { }

  getBiblioteca() {
    return this.http.get<Livro[]>(`${MYBOOKS_API}/biblioteca/livros`);
  }

  insertLivro(livro: Livro) {
    return this.http.post<any>(`${MYBOOKS_API}/biblioteca/adicionarlivro`, livro);
  }
}
