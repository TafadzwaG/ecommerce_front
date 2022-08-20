import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-container',
  templateUrl: './ads-container.component.html',
  styleUrls: ['./ads-container.component.scss']
})
export class AdsContainerComponent implements OnInit {

  @Input() index : number = 0
  @Input() homead : any 

  imageUrl = 'http://127.0.0.1:8000/storage/'

  constructor() { }

  ngOnInit(): void {
  }

}
