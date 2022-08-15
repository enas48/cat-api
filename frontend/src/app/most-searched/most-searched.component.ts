import { Component, OnInit } from '@angular/core';
import {CatService} from '../services/cat.service';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html',
  styleUrls: ['./most-searched.component.css']
})
export class MostSearchedComponent implements OnInit {
  cats:any;
  showLoader:boolean=true;
  
  constructor(private catService:CatService) { }

  ngOnInit(): void {

    this.showLoader = true;
    this.catService.getCats(10).subscribe(data=>{
        this.cats=data; 
        this.showLoader = false;
     })
  }

}
