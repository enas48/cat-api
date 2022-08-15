import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catWiki';
  isLoader:boolean=true;  
  constructor() { }

  ngOnInit(): void {
  }

  // setTimeout:any(() => {
  //   this.isLoader=false;

  // }, 3000);
}
