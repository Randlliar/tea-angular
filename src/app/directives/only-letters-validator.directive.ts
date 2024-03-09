import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[onlyLettersValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: OnlyLettersValidatorDirective, multi: true}
  ]
})
export class OnlyLettersValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(control.value);
    return result ? null : {pattern: control.value}
  }
}
