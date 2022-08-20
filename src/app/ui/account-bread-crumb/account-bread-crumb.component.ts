import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-bread-crumb',
  templateUrl: './account-bread-crumb.component.html',
  styleUrls: ['./account-bread-crumb.component.scss']
})
export class AccountBreadCrumbComponent implements OnInit {

  @Input() current_location: string = ''
  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
