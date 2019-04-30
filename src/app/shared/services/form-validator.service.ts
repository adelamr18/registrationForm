import { Injectable } from '@angular/core';
import { regexPatterns } from '../constants/defines'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }
  isAboveEightChars = false;
  hasOneLowerCaseLetter = false;
  hasOneUpperCaseLetter = false;
  hasOneNumber = false;
  hasOneSpecialChar = false;



  checkPasswordValidation(value: string) {
    this.resetFlags();
    const oneLowerCaseLetterRegex = new RegExp(regexPatterns.oneLowerCaseLetter);
    const oneUpperCaseLetterRegex = new RegExp(regexPatterns.oneUpperCaseLetter);
    const oneNumberRegex = new RegExp(regexPatterns.oneNumber);
    const oneSpecialCharRegex = new RegExp(regexPatterns.oneSpecialChar);
    if (value !== '') {
      if (value.length > 8) {
        this.isAboveEightChars = true;
      }
      if (oneLowerCaseLetterRegex.test(value)) {
        this.hasOneLowerCaseLetter = true;
      }
      if (oneUpperCaseLetterRegex.test(value)) {
        this.hasOneUpperCaseLetter = true;
      }
      if (oneNumberRegex.test(value)) {
        this.hasOneNumber = true;
      }
      if (oneSpecialCharRegex.test(value)) {
        this.hasOneSpecialChar = true;
      }
    }
  }

  resetFlags() {
    this.isAboveEightChars = false;
    this.hasOneLowerCaseLetter = false;
    this.hasOneUpperCaseLetter = false;
    this.hasOneNumber = false;
    this.hasOneSpecialChar = false;
  }

}
