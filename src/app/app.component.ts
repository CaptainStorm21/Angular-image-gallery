import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data=[
    {
      name:"Water",
      image:"images/water.jpg"
    },
    {
      name:"Snow",
      image:"images/snow.jpg"
    },
    {
      name:"Mountain",
      image:"images/mountain.jpg"
    }
  ]
  
}