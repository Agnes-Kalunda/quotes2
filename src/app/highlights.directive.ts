import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.background="#FF8C32";
  }

}
