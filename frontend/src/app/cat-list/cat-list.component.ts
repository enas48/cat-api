import { Component, OnInit } from '@angular/core';
import {CatService} from '../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats:any;
  name:string='';
  showLoader:boolean=true;
  constructor(private catService:CatService) { }

  ngOnInit(): void {
    this.showLoader = true;
   this.catService.getCats(4).subscribe(data=>{
      this.cats=data; 
      this.showLoader = false;
   })
   
  }

}
