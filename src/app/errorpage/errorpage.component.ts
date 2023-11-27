import {AfterViewInit, Component, Input} from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})

export class ErrorpageComponent implements AfterViewInit  {

  ngAfterViewInit(): void {{
  anime({
    targets: '.row svg',
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });

  anime({
    targets: '#zero',
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
  });

  }
 }
}
