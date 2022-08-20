import { DataStorageService } from './../../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-side-bar',
  templateUrl: './widget-side-bar.component.html',
  styleUrls: ['./widget-side-bar.component.scss']
})
export class WidgetSideBarComponent implements OnInit {

  public categories: any = []
  public product_categories : any = []
  public hoveredIndex : number = 0
  public hover : boolean = false
  public expandedGroup: any =[]


  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.getCategories().subscribe( categoriesRes => {
        console.table(categoriesRes)
        this.categories = categoriesRes
    })
  }


  isExpanded(index: number) {
    return this.expandedGroup.indexOf(index) !== -1;
  }

  expandCategories(index: number) {
    if (this.isExpanded(index))
      this.expandedGroup.splice(this.expandedGroup.indexOf(index), 1);
    else this.expandedGroup.push(index);
  }

}
