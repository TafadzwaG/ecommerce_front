import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-container',
  templateUrl: './cta-container.component.html',
  styleUrls: ['./cta-container.component.scss']
})
export class CtaContainerComponent implements OnInit {

  @Input() description : string
  @Input() iconClass : string
  @Input() title : string
  @Input() sub_title :  string

  constructor() {
    this.description = ''
    this.iconClass = ''
    this.title = ''
    this.sub_title = ''
   }

  ngOnInit(): void {
  }

}
