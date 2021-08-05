import { NgModule } from '@angular/core';

// MDBoostrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [],
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MDBBootstrapModule, 
    FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule
  ],
  providers: [MatDatepickerModule]
})
export class StyleModule { }
