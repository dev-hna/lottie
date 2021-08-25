import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    // https://github.com/ngx-lottie/ngx-lottie#quick-example
    // https://beecomci.tistory.com/54
    path: '/assets/animation.json',
    loop: false, // Optional
  };
  
  // 애니메이션 생성 성공
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem); 
  }
}
