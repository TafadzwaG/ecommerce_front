import { DataStorageService } from '../../../ui/services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {

  public products : any = []


  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.getLatestProducts().subscribe( latest_products => {
      console.table(latest_products)
      this.products = latest_products
    })
  }

}
