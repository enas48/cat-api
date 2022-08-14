import { outputAst } from '@angular/compiler';
import { Component, OnInit , EventEmitter, Output,Input} from '@angular/core';
import {CatService} from '../services/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  enteredSearchValue:String ='';
  searchValueMob:String ='';
  hidden:boolean=true;
  hiddenSuggested:boolean=true;
  suggestedCats:any=[];

@Output() searchTextChanged:EventEmitter<String> = new EventEmitter;


onSearchChange(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}
  constructor(private catService:CatService) { }

  ngOnInit(): void {
  }
  openSearch(){
    this.hidden=false;
  }
  off(){
    this.hidden=true; 
  }
  onChange(){
    if(   this.searchValueMob !=''){
      this.catService.searchByCatName(this.searchValueMob).subscribe(data=>{
        this.suggestedCats=data;
        this.hiddenSuggested=false;
       })
    }else{
      this.hiddenSuggested=true;
    }
    
  }
}
