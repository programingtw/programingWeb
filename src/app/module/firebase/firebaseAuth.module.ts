import { NgModule } from '@angular/core';

import { FirebaseModule } from './firebase.module'
import { AngularFireAuthModule } from '@angular/fire/auth'

@NgModule({
  declarations: [],
  imports: [],
  exports: [ 
    FirebaseAuthModule,
    AngularFireAuthModule
  ]
})
export class FirebaseAuthModule { }
