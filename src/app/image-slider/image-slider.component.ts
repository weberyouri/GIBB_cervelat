import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:no-input-rename
  @Input('before-img') beforeImgSrc;
  // tslint:disable-next-line:no-input-rename
  @Input('after-img') afterImgSrc;

  mobile = false;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 800) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
    this.removeComparison();
    this.initComparison();
  }

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit() {
    this.initComparison();
  }

  initComparison() {
    let x;
    let i;
    x = this.elementRef.nativeElement.querySelectorAll('.img-comp-overlay');
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }

    function compareImages(img) {
      let slider;
      let clicked: number;
      let w;
      let h;
      clicked = 0;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* Set the width of the img element to 50%: */
      img.style.width = (w / 2) + 'px';
      /* Create slider: */
      slider = document.createElement('div');
      slider.className = 'img-comp-slider';
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);
      /* Position the slider in the middle: */
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px';
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';
      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener('mousedown', slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener('mouseup', slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener('touchstart', slideReady);
      /* And released (for touch screens: */
      window.addEventListener('touchstop', slideFinish);

      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener('mousemove', slideMove);
        window.addEventListener('touchmove', slideMove);
      }

      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }

      function slideMove(e) {
        let pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked === 0) {
          return false;
        }
        /* Get the cursor's x position: */
        pos = getCursorPos(e);
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) {
          pos = 0;
        }
        if (pos > w) {
          pos = w;
        }
        /* Execute a function that will resize the overlay image according to the cursor: */
        slide(pos);
      }

      function getCursorPos(e) {
        let a;
        // tslint:disable-next-line:no-shadowed-variable
        let x: number;
        x = 0;
        e = e || window.event;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }

      // tslint:disable-next-line:no-shadowed-variable
      function slide(x) {
        /* Resize the image: */
        img.style.width = x + 'px';
        /* Position the slider: */
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px';
      }
    }
  }

  removeComparison() {
    const slider = this.elementRef.nativeElement.querySelector('.img-comp-slider');
    if (slider) {
      slider.className = '.hidden';
    }

  }
}
