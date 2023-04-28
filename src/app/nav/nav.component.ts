import { Component, OnInit } from '@angular/core';
import { navBarData } from './nav-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navData = navBarData;

  constructor() { }

  ngOnInit(): void {
  }
}
