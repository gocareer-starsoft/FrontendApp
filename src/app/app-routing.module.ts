import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from "./public/pages/landing/landing.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/pages/login/login.component";
import { SignupComponent} from "./public/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./public/pages/forgot-password/forgot-password.component";
import { HomeStComponent } from "./student/pages/home-st/home-st.component";
import { ProfileComponent } from "./student/components/profile/profile.component";
import { HomeSpComponent } from "./specialist/pages/home-sp/home-sp.component";
import {UsersOfSpecialistComponent} from "./specialist/pages/users-of-specialist/users-of-specialist.component";
import {CareerOptionsComponent} from "./public/pages/career-options/career-options.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'st/home', component: HomeStComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sp/home', component: HomeSpComponent },
  { path: 'career', component: CareerOptionsComponent },
  { path: 'users-specialist', component:UsersOfSpecialistComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
