import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormValidatorService } from '../shared/services/form-validator.service';
import { Subscription } from 'rxjs';

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


  constructor(private cd: ChangeDetectorRef, private formValidator: FormValidatorService) { }

  ngOnInit() {

  }

  changedPassword(value) {
    this.formValidator.checkPasswordValidation(value);
    this.isAboveEightChars = this.formValidator.isAboveEightChars;
    this.hasOneLowerCaseLetter = this.formValidator.hasOneLowerCaseLetter;
    this.hasOneUpperCaseLetter = this.formValidator.hasOneUpperCaseLetter;
    this.hasOneNumber = this.formValidator.hasOneNumber;
    this.hasOneSpecialChar = this.formValidator.hasOneSpecialChar;
  }

}

