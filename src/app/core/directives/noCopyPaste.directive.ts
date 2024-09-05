import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noCopyPaste]',
  standalone: true
})
export class NoCopyPasteDirective {
  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
}
