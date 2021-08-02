import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from './fireconfig'


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig) 
  ],
  exports: [ 
    AngularFireModule 
  ]
})
export class FirebaseModule { }
