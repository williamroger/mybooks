import { Component, OnInit } from '@angular/core';
import { Book } from '../livro/book.model';
import { InformationService } from './information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  estouLendo: Book[];
  emprestados: Book[];

  constructor(private informationService: InformationService) { }

  ngOnInit() {
    this.informationService.getInformation().subscribe(data => this.estouLendo = data);
    this.informationService.getInformation().subscribe(data => this.emprestados = data);
  }

}
