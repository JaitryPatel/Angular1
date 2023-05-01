import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.backgroundColor = 'Orange';
  }
  @HostListener('mouseout') mouseout() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
