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

  constructor(private catService:CatService) { }

  ngOnInit(): void {
   this.catService.getCats().subscribe(data=>{
      this.cats=data; 
   })
   
  }

}
