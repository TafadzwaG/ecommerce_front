import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-blog-card',
  templateUrl: './home-blog-card.component.html',
  styleUrls: ['./home-blog-card.component.scss']
})
export class HomeBlogCardComponent implements OnInit {

  @Input() index : number = 0
  @Input() blog : any 

  imageUrl = 'http://127.0.0.1:8000/storage/'


  formatDate(date: string) {
    var d = new Date(date)
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return d.getDate() + " " + months[d.getMonth()] + ' ' + d.getFullYear()
  }


  getDay(date : string){
    var d = new Date(date)
    return d.getDate() 
  }

  getMonth(date: string){
    var d = new Date(date)
    var months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return  months[d.getMonth()] 
  }

  constructor() { }


  ngOnInit(): void {
  }

}
