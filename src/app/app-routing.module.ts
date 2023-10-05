import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from "./public/pages/landing/landing.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/pages/login/login.component";
import { SignupComponent} from "./public/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./public/pages/forgot-password/forgot-password.component";
import { HomeComponent } from "./student/pages/home/home.component";
import { ProfileComponent } from "./student/components/profile/profile.component";
import {
  PrincipalPageSpecialistComponent
} from "./specialist/pages/principal-page-specialist/principal-page-specialist.component";
import {UsersOfSpecialistComponent} from "./specialist/pages/users-of-specialist/users-of-specialist.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'st/home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sp/home', component: PrincipalPageSpecialistComponent },
  { path: 'users-specialist', component:UsersOfSpecialistComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
