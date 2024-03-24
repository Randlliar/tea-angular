import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[addressValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: AddressValidatorDirective, multi: true}
  ]
})
export class AddressValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
      const result = /^[a-zA-Z0-9\s-]{2,}$/.test(control.value);
    return result ? null : {pattern: control.value}
  }
}
