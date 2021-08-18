import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { StyleModule } from '../module/style/style.module'
import { FirebaseAuthModule } from '../module/firebase/firebaseAuth.module' 

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component'

import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component';

import { SafehtmlPipe } from '../pipe/safehtml.pipe';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    IndexComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    AnnouncementComponent,
    AnnouncementdetailComponent,
    SafehtmlPipe,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    StyleModule,
    FirebaseAuthModule
  ]
})
export class IndexModule { }
