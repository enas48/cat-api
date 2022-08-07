import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchValue:String='';

  constructor() { }

  ngOnInit(): void {
  }
  onSearchEntered(value:String){
    this.searchValue=value;
    console.log(this.searchValue);
  }
}
