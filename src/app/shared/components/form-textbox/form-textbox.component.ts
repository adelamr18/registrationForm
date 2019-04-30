import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { FormValidatorService } from '../../services/form-validator.service';
import { placeHolders, alerts } from '../../constants/defines';



@Component({
  selector: 'app-form-textbox',
  templateUrl: './form-textbox.component.html',
  styleUrls: ['./form-textbox.component.css']
})
export class FormTextboxComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private formValidator: FormValidatorService) { }
  registerForm: FormGroup;
  @Input() firstInputType: string;
  @Input() secondInputType: string;
  @Output() passwordChange = new EventEmitter();
  @Output() emailChange = new EventEmitter();
  emailValidationError: string;
  emailPlaceHolder: string;
  passwordPlaceHolder: string;
  isEmailValid = false;
  passwordRequired = false;
  emailRequired = false;
  emailRequiredAlert: string;
  passwordRequiredAlert: string;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailAccount: [null, Validators.compose([Validators.required, Validators.email])],
      inputPassword: ['', Validators.compose([Validators.required])]
    });
    this.emailPlaceHolder = placeHolders.email;
    this.passwordPlaceHolder = placeHolders.password;
    this.emailValidationError = alerts.emailAlert;
    this.emailRequiredAlert = alerts.emailRequired;
    this.passwordRequiredAlert = alerts.passwordRequired;
  }

  onPasswordChange(event: any): void {
    this.passwordRequired = false;
    if (event.target.value) {
      this.passwordChange.emit(event.target.value);
    } else {
      this.passwordRequired = true;
    }
  }
  onEmailChange(event: any): void {
    this.emailRequired = false;
    if (event.target.value) {
      this.emailChange.emit(event.target.value);
      this.isEmailValid = this.formValidator.isEmailValid;
    } else {
      this.emailRequired = true;
    }

  }
}
