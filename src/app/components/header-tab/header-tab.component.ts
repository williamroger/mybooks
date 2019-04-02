import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  @Input() titulo: string;
  @Input() textoBotao: string;

  constructor() { }

  ngOnInit() {
  }

}
