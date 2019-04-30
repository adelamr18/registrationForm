import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormTextboxComponent } from './shared/components/form-textbox/form-textbox.component';
import { FormErrorsComponent } from './shared/components/form-errors/form-errors.component';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    FormTextboxComponent,
    FormErrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule , ReactiveFormsModule, MatInputModule , MatCardModule,
    MatButtonModule, MatToolbarModule , MatExpansionModule , MatProgressSpinnerModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
