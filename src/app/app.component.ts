import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  owlCarouselOptions: Object;
  
  constructor(private _zone: NgZone) {
    this.owlCarouselOptions = {
      items: 5,
      dots: true,
      navigation: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      loop: true,
      onTranslate: (e) => _zone.run(() => console.log("is translated, the page index is: "+e.page.index)),
    };
  }
}
