import { DataStorageService } from './../../../services/data-storage.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'


@Component({
  selector: 'app-slide-bar-section',
  templateUrl: './slide-bar-section.component.html',
  styleUrls: ['./slide-bar-section.component.scss']
})
export class SlideBarSectionComponent implements OnInit {

  public banners: any = []
  imageUrl = 'http://127.0.0.1:8000/storage/'


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    // nav: true,
    autoWidth: false,
    navSpeed: 1000,
    autoplay: true,
    items: 1,
    autoplayHoverPause: true,
    // autoplaySpeed: 4000,
    smartSpeed: 1000
   
  }

  constructor(
    private dataStorageService: DataStorageService,
    
  ) { }

  ngOnInit(): void {
    this.dataStorageService.getBannerAd().subscribe(bannersRes => {
      this.banners = bannersRes
    })
  }

  
  

  ngAfterViewInit() {
    const dom: Element = document.getElementById('radio2') as HTMLElement;
    console.log(dom)

  }

}

