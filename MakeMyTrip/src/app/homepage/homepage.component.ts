import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
  //   this.closeAllModals()
  // }

  // closeAllModals() {
  //   const modalElements = this.elementRef.nativeElement.querySelectorAll('.modal');
  //   modalElements.forEach((modalElement: HTMLElement) => {
  //     this.renderer.removeClass(modalElement, 'show');
  //     this.renderer.setStyle(modalElement, 'display', 'none');
  //   });
  //   const modalBackdropElement = this.elementRef.nativeElement.querySelector('.modal-backdrop');
  //   if (modalBackdropElement) {
  //     this.renderer.removeChild(document.body, modalBackdropElement);
  //   }
  // }
  
}
