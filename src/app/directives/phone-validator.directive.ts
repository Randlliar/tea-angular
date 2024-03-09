import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[phoneValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const result = (/^\+?[0-9]{11}$/).test(control.value);
    return result ? null : {pattern: control.value}
  }
}
