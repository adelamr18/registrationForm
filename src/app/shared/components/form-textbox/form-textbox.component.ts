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
  emailError: string;
  emailPlaceHolder: string;
  passwordPlaceHolder: string;
  isEmailValid = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailAccount: [null, Validators.compose([Validators.required, Validators.email])],
      inputPassword: ['']
    });
    this.emailPlaceHolder = placeHolders.email;
    this.passwordPlaceHolder = placeHolders.password;
    this.emailError = alerts.emailAlert;
  }
  onPasswordChange(event: any): void {
    this.passwordChange.emit(event.target.value);
    this.isEmailValid = this.formValidator.isEmailValid;
  }
  onEmailChange(event: any): void {
    this.emailChange.emit(event.target.value);
  }
}
