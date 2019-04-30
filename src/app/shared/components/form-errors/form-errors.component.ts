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
  @Input() isAboveEightChars: boolean;
  @Input() hasOneLowerCaseLetter: boolean;
  @Input() hasOneUpperCaseLetter: boolean;
  @Input() hasOneNumber: boolean;
  @Input() hasOneSpecialChar: boolean;


  constructor() { }

  ngOnInit() {
    this.initializeErrorMessages();
  }

  initializeErrorMessages() {
    this.minChars = alerts.minEightCharsAlert;
    this.minLowerCaseLetter = alerts.oneLowerCaseLetterAlert;
    this.minUpperCaseLetter = alerts.oneUpperCaseLetterAlert;
    this.minNumber = alerts.oneNumberAlert;
    this.minSpecialChar = alerts.oneSpecialCharacterAlert;
  }



}
