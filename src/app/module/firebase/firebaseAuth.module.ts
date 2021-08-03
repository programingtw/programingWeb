import { NgModule } from '@angular/core';

import { FirebaseModule } from './firebase.module'
import { AngularFireAuthModule } from '@angular/fire/auth'

@NgModule({
  declarations: [],
  imports: [],
  exports: [ 
    FirebaseModule,
    AngularFireAuthModule
  ]
})
export class FirebaseAuthModule { }
