import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  @Input() title: string;
  @Input() textButton: string;

  constructor() { }

  ngOnInit() {
  }

}
