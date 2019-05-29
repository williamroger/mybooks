import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {
  nomeUsuario = "William Roger";
  iconpath = 'assets/images/arrow-bottom.svg';
  toggleUserOption = false;

  constructor() { }

  ngOnInit() {
  }

  showUserOption() {
    this.toggleUserOption = !this.toggleUserOption;
  }
}
