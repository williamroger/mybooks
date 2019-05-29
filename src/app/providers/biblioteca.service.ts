import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Livro } from '../components/livro/livro.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    })
  };

  constructor(private http: HttpClient) { }

  getBiblioteca() {
    return this.http.get<Livro[]>(`${MYBOOKS_API}/biblioteca/livros`);
  }

  insertLivro(livro: Livro) {
    console.log(livro);
    return this.http.post<any>(`${MYBOOKS_API}/biblioteca/adicionarlivro`, livro, this._httpOptions);
  }
}
