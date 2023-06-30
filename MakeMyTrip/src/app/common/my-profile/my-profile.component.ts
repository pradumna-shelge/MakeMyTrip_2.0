import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    this.closeAllModals()
  }

  closeAllModals() {
    const modalElements = this.elementRef.nativeElement.querySelectorAll('.modal');
    modalElements.forEach((modalElement: HTMLElement) => {
      this.renderer.removeClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'none');
    });
    const modalBackdropElement = this.elementRef.nativeElement.querySelector('.modal-backdrop');
    if (modalBackdropElement) {
      this.renderer.removeChild(document.body, modalBackdropElement);
    }
  }
}
