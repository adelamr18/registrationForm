import { Component, OnInit, Input } from '@angular/core';
import { alerts } from '../../constants/defines';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent implements OnInit {
  minChars: string;
  minLowerCaseLetter: string;
  minUpperCaseLetter: string;
  minNumber: string;
  minSpecialChar: string;
  /** flag to indicate whether password input is above 8 characters */
  @Input() isAboveEightChars: boolean;
  /** flag to indicate whether password input has one lowercase letter */
  @Input() hasOneLowerCaseLetter: boolean;
  /** flag to indicate whether password input has one uppercase letter */
  @Input() hasOneUpperCaseLetter: boolean;
  /** flag to indicate whether password input has one number */
  @Input() hasOneNumber: boolean;
  /** flag to indicate whether password input has one special character */
  @Input() hasOneSpecialChar: boolean;


  constructor() { }

  ngOnInit() {
    this.initializeErrorMessages();
  }
  /**
  *This is the initializeErrorMessages function
  *that sets error messages for password input
  */
  initializeErrorMessages(): void {
    this.minChars = alerts.minEightCharsAlert;
    this.minLowerCaseLetter = alerts.oneLowerCaseLetterAlert;
    this.minUpperCaseLetter = alerts.oneUpperCaseLetterAlert;
    this.minNumber = alerts.oneNumberAlert;
    this.minSpecialChar = alerts.oneSpecialCharacterAlert;
  }



}
