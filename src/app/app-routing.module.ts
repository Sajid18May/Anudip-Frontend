import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  { path: 'register',component: RegistrationComponent,},
  { path: 'homepage', component: HomepageComponent },
  // {path:"",component:HomepageComponent},
  // {path:"",component:HomepageComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
