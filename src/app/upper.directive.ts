import { Directive, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private el:ElementRef) { 
  // el.nativeElement.innerHtml = el.nativeElement.innerHtml.toUpperCase();
  }

 ngAfterViewInit():void {
	this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toUpperCase();
  }
 
}
