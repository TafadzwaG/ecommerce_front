import { DataStorageService } from '../services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {

  public categories: any = []
  public loading: boolean = false
  public expandedGroup: any = []
  public expandSubGroup: any = []

  public selected : any = {
    categories : []
  }

  constructor(
    private dataStorageService : DataStorageService
  ) { }



  ngOnInit(): void {
    this.dataStorageService.getCategories().subscribe( categoriesRes => {
      this.categories = categoriesRes
    } )
  }

  isExpanded(index : number) {
    return this.expandedGroup.indexOf(index) !== -1;
  }

  expandCategories(index : number) {
    if (this.isExpanded(index))
      this.expandedGroup.splice(this.expandedGroup.indexOf(index), 1);
    else this.expandedGroup.push(index);
  }

  isExpandedSubGroup(key : number) {
    return this.expandSubGroup.indexOf(key) !== -1;
  }

  expandSubCategories(key : number) {
    if (this.isExpandedSubGroup(key))
      this.expandSubGroup.splice(this.expandSubGroup.indexOf(key), 1);
    else this.expandSubGroup.push(key);
  }


}
