import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Livro } from '../components/livro/livro.model';

@Injectable({
  providedIn: 'root'
})
export class InformacoesService {

  constructor(private http: HttpClient) { }

  getLivrosEmLeitura() {
    return this.http.get<Livro[]>(`${MYBOOKS_API}/livrosemleitura`);
  }

  getLivrosEmprestados() {
    return this.http.get<Livro[]>(`${MYBOOKS_API}/livrosemprestado`);
  }
}
