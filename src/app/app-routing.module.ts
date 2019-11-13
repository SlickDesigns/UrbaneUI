import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  { path: 'home',component: HomeComponent, data : {title : 'home'} },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'privacy-policy',component: PrivacyComponent },
  { path: 'projects',component: ProjectsComponent, data : {title : 'projects'} },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
