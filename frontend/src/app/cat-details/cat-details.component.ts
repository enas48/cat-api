import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CatService} from '../services/cat.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
cat:any;
image:string='';
rates: number[] = [1, 2, 3, 4, 5];
catimages:any;
  constructor(private route: ActivatedRoute, private catService:CatService) { }

  ngOnInit(): void {
    this.cat={
      name:''
    }
 
    let id  = this.route.snapshot.params['id'];
    //get cat
    this.catService.getCat(id).subscribe(data=>{
      this.cat=data;

      //get cat image 
      this.catService.getImage(data.reference_image_id).subscribe(data=>{
        this.image=data.url;
       })
     })


     //get cat images 
     this.catService.getcatImages(id).subscribe(data=>{
      this.catimages=data;
     })
  }

}
