import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataStorageService } from '../../../ui/services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  public blogs : any = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    // nav: true,
    autoWidth: false,
    autoHeight: true,
    navSpeed: 1000,
    autoplay: true,
    items: 1,
    autoplayHoverPause: true,
    // autoplaySpeed: 4000,
    smartSpeed: 1000
   
  }

  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.getBlogs().subscribe( blogs => {
      console.table(blogs)
      this.blogs = blogs
    })
  }

}
