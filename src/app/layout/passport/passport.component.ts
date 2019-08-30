import { Component } from '@angular/core';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent {
  carouselArray = [
    {
      imgUrl: './assets/images/passport-bg1.jpeg',
    },
    {
      imgUrl: './assets/images/passport-bg2.jpeg',
    },
  ];

  links = [];
}
