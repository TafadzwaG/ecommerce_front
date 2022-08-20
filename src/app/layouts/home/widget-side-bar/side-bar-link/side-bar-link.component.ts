import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-link',
  templateUrl: './side-bar-link.component.html',
  styleUrls: ['./side-bar-link.component.scss']
})
export class SideBarLinkComponent implements OnInit {

  @Input() iconClass: string

  constructor() { 
    this.iconClass = ''
  }

  ngOnInit(): void {
  }

}
