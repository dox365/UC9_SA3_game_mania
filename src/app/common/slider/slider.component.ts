import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carouselOptions = 
    {
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  }
  
 
  images = [
    
    {
      text: "Festive Deer",
      image: ["/assets/img/15.jpg"]
    },
    {
      text: "Festive Deer",
      image: ["/assets/img/16.jpg"]
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }


}
