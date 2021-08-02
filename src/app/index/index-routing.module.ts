import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component'; 
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      {
        path: '', 
        children: [
          {path: '', component: HomeComponent},
        ]
      },
      {path: 'about', component: AboutusComponent},
      {path: 'home', redirectTo: '/', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }