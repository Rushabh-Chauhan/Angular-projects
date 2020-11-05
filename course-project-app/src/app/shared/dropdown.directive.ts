import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')  isOpen = false; // here as we put open in the class in html so it open the drawer so we use class to get the class and open.

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elref.nativeElement.contains(event.target) ? !this.isOpen : false;
  }// this used to close the drawer from clicking any where in the page 

  constructor(private elref : ElementRef, private rebderer : Renderer2) { }

  // @HostListener('click') toggleOpen(eventData : Event)
  // {
  //   this.isOpen = !this.isOpen;
  // }

}
