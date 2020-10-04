import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appProd]'
})
export class ProdDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }
  @Input('onSale') onSale;
  // @HostListener('mouseover') onMouseOver() {
  //   this.elementRef.nativeElement.style.border = '1px solid red';
  // }
  // @HostListener('mouseout') onMouseOut() {
  //   this.elementRef.nativeElement.style.border = '1px solid rgba(0,0,0,0)';
  // }


// tslint:disable-next-line:typedef
ngOnInit() {
    if (this.onSale === true) {
      this.elementRef.nativeElement.style.border = '1px solid red';
    }

}
}
