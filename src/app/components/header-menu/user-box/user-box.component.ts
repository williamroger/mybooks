import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {
  userName = "William Roger";
  iconpath = 'assets/images/arrow-bottom.svg';
  toggleUserOption = false;

  constructor() { }

  ngOnInit() {
  }

  showUserOption() {
    this.toggleUserOption = !this.toggleUserOption;
  }
}
