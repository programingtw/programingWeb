import { NgModule } from '@angular/core';

// MDBoostrap
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MDBoostrap
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// MDB-ui-kit
import { MdbUiKitModule } from './mdb-ui-kit.module'


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
    // MDBBootstrapModule.forRoot()
    MDBBootstrapModulesPro.forRoot()
  ],
  exports: [
    // MDBBootstrapModule,
    MDBBootstrapModulesPro,
    // MdbUiKitModule,
    FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule
  ],
  providers: [MatDatepickerModule, MDBSpinningPreloader]
})
export class StyleModule { }
