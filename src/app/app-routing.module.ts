import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from "./public/pages/landing/landing.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/pages/login/login.component";
import { SignupComponent} from "./public/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./public/pages/forgot-password/forgot-password.component";
import { HomeStComponent } from "./student/pages/home-st/home-st.component";
import { TalksStComponent } from "./student/pages/talks-st/talks-st.component";
import { TestsStComponent } from "./student/pages/tests-st/tests-st.component";
import { HomeSpComponent } from "./specialist/pages/home-sp/home-sp.component";
import { TalksSpComponent } from "./specialist/pages/talks-sp/talks-sp.component";
import { TestsSpComponent } from "./specialist/pages/tests-sp/tests-sp.component";
import {UsersOfSpecialistComponent} from "./specialist/pages/users-of-specialist/users-of-specialist.component";
import {CareerOptionsComponent} from "./student/pages/career-options/career-options.component";

const routes: Routes = [
  { path: '', component: LandingComponent, title: 'GoCareer' },
  {
    path: 'login', component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup', component: SignupComponent,
    data: { title: 'Signup' }
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent,
    data: { title: 'Forgot Password' }
  },
  {
    path: 'st', data: { title: 'Student' },
    children: [
      { path: 'home', component: HomeStComponent },
      { path: 'talks', component: TalksStComponent },
      { path: 'tests', component: TestsStComponent },
      { path: 'careers', component: CareerOptionsComponent }
    ]
  },
  {
    path: 'sp', data: { title: 'Specialist' },
    children: [
      { path: 'home', component: HomeSpComponent },
      { path: 'talks', component: TalksSpComponent },
      { path: 'tests', component: TestsSpComponent },
      { path: 'users-specialist', component: UsersOfSpecialistComponent }
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
