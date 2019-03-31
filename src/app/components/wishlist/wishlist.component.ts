import { Component, OnInit } from '@angular/core';
import { Book } from '../livro/book';
import { ListadesejosService } from './listadesejos.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  listaDesejos: Book[];

  constructor(private listadesejosService: ListadesejosService) { }

  ngOnInit() {
    this.listadesejosService.getListaDesejos()
      .subscribe(data => this.listaDesejos = data);
  }

}
