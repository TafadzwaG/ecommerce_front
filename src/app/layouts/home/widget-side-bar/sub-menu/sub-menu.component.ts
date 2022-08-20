import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  public loading: boolean = false
  public collapsible : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
