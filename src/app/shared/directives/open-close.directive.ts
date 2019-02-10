import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOpenClose]'
})
export class OpenCloseDirective {
  @HostBinding('class.unhide-edit') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = true;
  }
}
