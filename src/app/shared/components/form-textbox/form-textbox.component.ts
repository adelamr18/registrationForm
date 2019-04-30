import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { FormValidatorService } from '../../services/form-validator.service';


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

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailAccount: [null, Validators.compose([Validators.required, Validators.email])],
      inputPassword: ['']
    });
  }
  get f() { return this.registerForm.controls; }
  onPasswordChange(event) {
    this.passwordChange.emit(event.target.value);
  }
  onEmailChange(event) {
    this.emailChange.emit(event.target.value);
  }
}
