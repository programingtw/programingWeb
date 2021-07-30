import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component'

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { firebaseConfig } from './fireconfig'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    AboutusComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
