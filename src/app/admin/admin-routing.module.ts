import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { AdminComponent } from './admin/admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const redirectLoggedInToAdmin = () => redirectLoggedInTo(['admin']);
const islogged = () => redirectUnauthorizedTo(['admin/login'])

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        ...canActivate(islogged)
      },
      {
        path: 'login', 
        component: LoginComponent,
        ...canActivate(redirectLoggedInToAdmin)
      },
      {
        path: 'announcement', 
        component: AnnouncementComponent,
        ...canActivate(islogged)
      },
      {
        path: 'announcement/:id',
        component: AnnouncementdetailComponent,
        ...canActivate(islogged)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
