import { Component, OnInit } from '@angular/core';
import { Book } from '../livro/book.model';
import {ReadService} from './read.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  read: Book[];

  constructor(private readService: ReadService) { }

  ngOnInit() {
    this.readService.getRead().subscribe(data => this.read = data);
  }

}
