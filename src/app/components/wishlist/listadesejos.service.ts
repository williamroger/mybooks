import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Book } from '../livro/book';


@Injectable({
  providedIn: 'root'
})
export class ListadesejosService {

  constructor(private http: HttpClient) { }

  getListaDesejos() {
    return this.http.get<Book[]>(MYBOOKS_API);
  }
}
