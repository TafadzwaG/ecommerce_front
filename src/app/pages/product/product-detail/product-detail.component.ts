import { DataStorageService } from '../../../ui/services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: any
  public isLoading: boolean = false

  constructor(
    private dataStorageService : DataStorageService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    const id = this.route.snapshot.params['id']
    this.dataStorageService.getSingleProduct(id).subscribe( product => {
      console.log(product)
      this.isLoading = false
      this.product = product
    })
  }


}
