import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
