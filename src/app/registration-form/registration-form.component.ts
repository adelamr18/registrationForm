import { Component, OnInit } from '@angular/core';
import { FormValidatorService } from '../shared/services/form-validator.service';
import { buttonTexts } from '../shared/constants/defines'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  isAboveEightChars = false;
  hasOneLowerCaseLetter = false;
  hasOneUpperCaseLetter = false;
  hasOneNumber = false;
  hasOneSpecialChar = false;
  isEmailValid = false;
  isFormValid = false;
  submit: string;


  constructor( private formValidator: FormValidatorService) { }

  ngOnInit() {
    this.submit = buttonTexts.submit;
  }

  changedPassword(value) {
    this.formValidator.checkPasswordValidation(value);
    this.isAboveEightChars = this.formValidator.isAboveEightChars;
    this.hasOneLowerCaseLetter = this.formValidator.hasOneLowerCaseLetter;
    this.hasOneUpperCaseLetter = this.formValidator.hasOneUpperCaseLetter;
    this.hasOneNumber = this.formValidator.hasOneNumber;
    this.hasOneSpecialChar = this.formValidator.hasOneSpecialChar;
    this.checkIsFormValid();
  }
  changedEmail(value) {
    this.formValidator.checkEmailValidation(value);
    this.isEmailValid = this.formValidator.isEmailValid;
    this.checkIsFormValid();
  }
  checkIsFormValid() {
    if (this.isAboveEightChars && this.hasOneLowerCaseLetter && this.hasOneUpperCaseLetter &&
      this.hasOneNumber && this.hasOneSpecialChar && this.isEmailValid
    ) {
      this.isFormValid = true;
    }
    else {
      this.isFormValid = false;
    }



  }






}

