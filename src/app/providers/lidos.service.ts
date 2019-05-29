import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MYBOOKS_API } from 'src/app/app.api';
import { Livro } from '../components/livro/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LidosService {

  constructor(private http: HttpClient) { }

  getLidos() {
    return this.http.get<Livro[]>(`${MYBOOKS_API}/lidos`);
  }
}
