import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataStorageService } from '../../../ui/services/data-storage.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    // nav: true,
    autoWidth: false,
    autoHeight: true,
    navSpeed: 1000,
    autoplay: true,
    items: 4,
    autoplayHoverPause: true,
    // autoplaySpeed: 4000,
    smartSpeed: 1000
   
  }

  public featured_products : any = []

  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit(): void {
      this.dataStorageService.getFeaturedProducts().subscribe( fprod => {
        console.table(fprod)
        this.featured_products = fprod
      })
  }

}
