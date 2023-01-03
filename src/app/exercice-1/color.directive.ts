import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) windowClick(
    event: KeyboardEvent
  ) {
    if (event.key === 'ArrowUp')
      this.element.nativeElement.style.color = '#f0f';
    if (event.key === 'ArrowDown')
      this.element.nativeElement.style.color = '#dd0';
    if (event.key === 'ArrowRight')
      this.element.nativeElement.style.color = '#d00';
    if (event.key === 'ArrowLeft')
      this.element.nativeElement.style.color = '#0c0';
  }

  constructor(private element: ElementRef) {}
}
