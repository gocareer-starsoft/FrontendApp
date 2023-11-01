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
import { ProfileComponent } from "./student/components/profile/profile.component";
import { HomeSpComponent } from "./specialist/pages/home-sp/home-sp.component";
import { TalksSpComponent } from "./specialist/pages/talks-sp/talks-sp.component";
import { TestsSpComponent } from "./specialist/pages/tests-sp/tests-sp.component";
import {UsersOfSpecialistComponent} from "./specialist/pages/users-of-specialist/users-of-specialist.component";
import {CareerOptionsComponent} from "./public/pages/career-options/career-options.component";
import {CalificateTestSpComponent} from "./specialist/pages/calificate-test-sp/calificate-test-sp.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'st/home', component: HomeStComponent },
  { path: 'st/talks', component: TalksStComponent },
  { path: 'st/tests', component: TestsStComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sp/home', component: HomeSpComponent },
  { path: 'sp/talks', component: TalksSpComponent },
  { path: 'sp/tests', component: TestsSpComponent },
  { path: 'career', component: CareerOptionsComponent },
  { path: 'users-specialist', component:UsersOfSpecialistComponent },
  { path: 'sp/qualify-test', component:CalificateTestSpComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
