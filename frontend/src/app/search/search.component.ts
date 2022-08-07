import { outputAst } from '@angular/compiler';
import { Component, OnInit , EventEmitter, Output,Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  enteredSearchValue:String ='';
@Output() searchTextChanged:EventEmitter<String> = new EventEmitter;

onSearchChange(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}
  constructor() { }

  ngOnInit(): void {
  }

}
