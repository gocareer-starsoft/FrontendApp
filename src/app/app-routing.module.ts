import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/pages/login/login.component";
import { SignupComponent} from "./public/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./public/pages/forgot-password/forgot-password.component";
import { HomeStudentComponent } from "./student/pages/home-student/home-student.component";
import { TalksWithSpecialistsComponent } from "./student/pages/talks-with-specialists/talks-with-specialists.component";
import { VocationalTestsComponent } from "./student/pages/vocational-tests/vocational-tests.component";
import { HomeSpecialistComponent } from "./specialist/pages/home-specialist/home-specialist.component";
import { TalksWithStudentsComponent } from "./specialist/pages/talks-with-students/talks-with-students.component";
import { QualifyTestsComponent } from "./specialist/pages/qualify-tests/qualify-tests.component";
import {SeeAllStudentsComponent} from "./specialist/pages/see-all-students/see-all-students.component";
import {CareerOptionsComponent} from "./student/pages/career-options/career-options.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'GoCareer' },
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
      { path: 'home', component: HomeStudentComponent },
      { path: 'talks', component: TalksWithSpecialistsComponent },
      { path: 'tests', component: VocationalTestsComponent },
      { path: 'careers', component: CareerOptionsComponent }
    ]
  },
  {
    path: 'sp', data: { title: 'Specialist' },
    children: [
      { path: 'home', component: HomeSpecialistComponent },
      { path: 'talks', component: TalksWithStudentsComponent },
      { path: 'tests', component: QualifyTestsComponent },
      { path: 'users-specialist', component: SeeAllStudentsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
