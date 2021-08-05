import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { StyleModule } from '../module/style/style.module'
import { FirebaseModule } from '../module/firebase/firebase.module' 

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component'

import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementdetailComponent } from './announcement/announcementdetail/announcementdetail.component';

@NgModule({
  declarations: [
    IndexComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    AnnouncementComponent,
    AnnouncementdetailComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    StyleModule,
    FirebaseModule
  ]
})
export class IndexModule { }
