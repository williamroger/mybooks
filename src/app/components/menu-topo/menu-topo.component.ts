import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.scss']
})
export class MenuTopoComponent implements OnInit {

  logopath = 'assets/images/mybooks.png';

  constructor() { }

  ngOnInit() {
  }

}
