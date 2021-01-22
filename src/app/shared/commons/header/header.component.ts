import { commonsLabels } from './../../labels/commons.labels';
import { menuLabels } from './../../labels/menu.labels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuLabels = menuLabels;
  commonsLabels = commonsLabels;
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
