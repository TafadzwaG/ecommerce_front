import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  public hover : boolean = false

  constructor() { }

  ngOnInit(): void {
    
  }

}
