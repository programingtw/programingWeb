import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component'; 
import { AboutusComponent } from './aboutus/aboutus.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component';
import { CourseComponent } from './course/course.component'

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutusComponent},
      {path: 'home', redirectTo: '/', pathMatch: 'full'},
      {path: 'announcement', component: AnnouncementComponent},
      {path: 'announcement/:id', component: AnnouncementdetailComponent},
      {path: 'course', component: CourseComponent},
      {path: '*', redirectTo: '/', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
