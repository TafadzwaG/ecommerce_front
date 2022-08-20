import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  @Input() index : number = 0
  @Input() feature : any 

  imageUrl = 'http://127.0.0.1:8000/storage'

  constructor() { }

  ngOnInit(): void {
  }

}
