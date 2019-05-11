import { Component, OnInit } from '@angular/core';
import { Book } from '../livro/book.model';
import { ListadesejosService } from './listadesejos.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  listaDesejos: Book[];
  headerTitle: string = "Livros  que desejo comprar";
  buttonText: string = "Adicionar novo livro";

  constructor(private listadesejosService: ListadesejosService) { }

  ngOnInit() {
    // console.log(data);
    this.listadesejosService.getListaDesejos()
      .subscribe(data => this.listaDesejos = data);
  }

}
