import { Component, OnInit } from '@angular/core';
import { FormValidatorService } from '../shared/services/form-validator.service';
import { buttonTexts, headerTexts } from '../shared/constants/defines';

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
  headerText: string;


  constructor(private formValidator: FormValidatorService) { }

  ngOnInit() {
    this.submit = buttonTexts.submit;
    this.headerText = headerTexts.login;
  }
  /**
* This is the changedPassword function
* @param value This is the typed password which the user inputs
* that sets the needed flags that check for password validation
*/
  changedPassword(value: string): void {
    this.formValidator.checkPasswordValidation(value);
    this.isAboveEightChars = this.formValidator.isAboveEightChars;
    this.hasOneLowerCaseLetter = this.formValidator.hasOneLowerCaseLetter;
    this.hasOneUpperCaseLetter = this.formValidator.hasOneUpperCaseLetter;
    this.hasOneNumber = this.formValidator.hasOneNumber;
    this.hasOneSpecialChar = this.formValidator.hasOneSpecialChar;
    this.checkIsFormValid();
  }
  /**
* This is the changedEmail function
* @param value This is the typed email which the user inputs
* that sets the needed flags that check for email validation
*/
  changedEmail(value: string): void {
    this.formValidator.checkEmailValidation(value);
    this.isEmailValid = this.formValidator.isEmailValid;
    this.checkIsFormValid();
  }
/**
*  This is the checkIsFormValid function
* that sets the needed flags that for checking if the form is valid or not*/
  checkIsFormValid(): void {
    if (this.isAboveEightChars && this.hasOneLowerCaseLetter && this.hasOneUpperCaseLetter &&
      this.hasOneNumber && this.hasOneSpecialChar && this.isEmailValid
    ) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }






}

