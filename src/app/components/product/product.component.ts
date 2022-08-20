import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any

  imageUrl = 'http://127.0.0.1:8000/storage/'

  constructor() { }

  ngOnInit(): void {
  }

}
