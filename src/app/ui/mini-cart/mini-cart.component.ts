import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  public hover : boolean = false

  public cart_items = 0

  constructor() { }

  getCartItems(){
    let cart = JSON.parse(localStorage.getItem('cart')) 

    this.cart_items = cart.items.length
    
  }

  ngOnInit(): void {
    this.getCartItems()
  }

}
