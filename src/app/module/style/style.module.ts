import { NgModule } from '@angular/core';

// MDBoostrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [],
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MDBBootstrapModule, 
    FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule
  ]
})
export class StyleModule { }
