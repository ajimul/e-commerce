import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberInput]'
})
export class NumberInputDirective {
@Input() allowDecimal:boolean=false;
  constructor(private er:ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = this.er.nativeElement as HTMLInputElement;
    let currentValue = inputElement.value;

    // Allow decimal numbers if specified
    if (this.allowDecimal) {
      // Remove non-numeric and non-decimal characters using a regular expression
      currentValue = currentValue.replace(/[^0-9.]/g, '');

      // Ensure only one decimal point is present
      const decimalCount = currentValue.split('.').length - 1;
      if (decimalCount > 1) {
        currentValue = currentValue.slice(0, currentValue.lastIndexOf('.'));
      }
    } else {
      // Remove non-numeric characters using a regular expression
      currentValue = currentValue.replace(/[^0-9]/g, '');
    }

    // Update the input value with the cleaned value
    inputElement.value = currentValue;
  }
}
