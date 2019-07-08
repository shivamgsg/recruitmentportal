import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '' , redirectTo:'/Home',pathMatch:'full'},
  {path:"Login", component:LoginComponent},
  {path:"Home",component:HomeComponent},
  {path:"Signup",component:SignupComponent},
  {path:"Jobs",component:JobsComponent},
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
