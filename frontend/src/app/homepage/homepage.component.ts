import { Component, OnInit } from '@angular/core';
import {CatService} from '../services/cat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchValue:String='';
  suggestedCats:any=[];
  hidden:boolean=true;

  constructor(private catService:CatService) { }

  ngOnInit(): void {
    
  }
  onSearchEntered(value:String){
    this.searchValue=value;
    if(   this.searchValue !=''){
      this.catService.searchByCatName(this.searchValue).subscribe(data=>{
        this.suggestedCats=data;
        this.hidden=false;
       })
    }else{
      this.hidden=true;
    }
    
  }


}
