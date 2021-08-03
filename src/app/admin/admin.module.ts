import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { StyleModule } from '../module/style/style.module'; 
import { FirebaseAuthModule } from '../module/firebase/firebaseAuth.module';

import { AdminComponent } from './admin/admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component';


@NgModule({
  declarations: [
    AdminComponent,
    AnnouncementComponent,
    LoginComponent,
    DashboardComponent,
    AnnouncementdetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StyleModule,
    FirebaseAuthModule
  ]
})
export class AdminModule { }
