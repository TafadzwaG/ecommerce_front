import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  imageUrl = 'http://127.0.0.1:8000/storage';

  @Input() image

  constructor() { }

  ngOnInit(): void {
    
  }

  computeImageString(imageString: string) {
    const image = imageString.replace(/^public/, '');

    return image;
  }

}
