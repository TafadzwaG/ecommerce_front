import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {

  @Input() index: number = 0
  @Input() product: any


  imageUrl = 'http://127.0.0.1:8000/storage'

  constructor() { }

  ngOnInit(): void {
  }

}
