import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card-number]',
})
export class CreditCardNumberDirective {
  public element: ElementRef<HTMLInputElement>;

  constructor(el: ElementRef<HTMLInputElement>) {
    this.element = el;

    el.nativeElement.style.padding = '10px';
    el.nativeElement.style.border = 'none';
    el.nativeElement.style.borderRadius = '10px';
  }
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
