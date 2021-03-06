import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { StyleModule } from '../module/style/style.module'; 
import { FirebaseAuthModule } from '../module/firebase/firebaseAuth.module';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AdminComponent } from './admin/admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component';

import { AngularFireStorageModule } from '@angular/fire/storage'


@NgModule({
  declarations: [
    AdminComponent,
    AnnouncementComponent,
    LoginComponent,
    DashboardComponent,
    AnnouncementdetailComponent
  ],
  imports: [
    CKEditorModule,
    CommonModule,
    AdminRoutingModule,
    StyleModule,
    FirebaseAuthModule,
    AngularFireStorageModule
  ],
})
export class AdminModule { }
