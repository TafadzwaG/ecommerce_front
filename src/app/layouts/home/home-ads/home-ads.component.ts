import { DataStorageService } from './../../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ads',
  templateUrl: './home-ads.component.html',styleUrls: ['./home-ads.component.scss']
})
export class HomeAdsComponent implements OnInit {

  public homeads : any = []

  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.getHomeAds().subscribe( ads => {
      console.table(ads)
      this.homeads = ads
    })
  }

}
