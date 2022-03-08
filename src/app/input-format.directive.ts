import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: any;
  constructor(private el: ElementRef) { 
    
  }
  // @HostListener('focus') onFocus(){
  //   console.log("on Focus");
  // }

  @HostListener('blur') onBlur(){
    console.log("on Blur");
    let value: string  = this.el.nativeElement.value;

    if(this.format=='lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }


}
