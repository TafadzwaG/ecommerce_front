import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss']
})
export class CartItemCardComponent implements OnInit {

  @Input() cart_item
  @Input() index: number

  constructor() { }

  ngOnInit(): void {
  }

  removeItemFromCart(){

  }

}
