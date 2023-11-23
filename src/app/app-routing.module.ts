import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from "./public/pages/landing-page/landing-page.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./iam/pages/login/login.component";
import { SignupComponent} from "./iam/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./iam/pages/forgot-password/forgot-password.component";
import { StudentHomeComponent } from "./public/pages/student-home/student-home.component";
import { VocationalEventsComponent } from "./orientation/pages/vocational-events/vocational-events.component";
import { VocationalTestsComponent } from "./assessment/pages/vocational-tests/vocational-tests.component";
import { SpecialistPanelComponent } from "./public/pages/specialist-panel/specialist-panel.component";
import {ResultsComponent} from "./assessment/pages/results/results.component";
import {QuestionsComponent} from "./assessment/pages/questions/questions.component";
import {EvaluationTestComponent} from "./public/pages/evaluation-test/evaluation-test.component";
import {CreateEvaluationComponent} from "./assessment/pages/create-evaluation/create-evaluation.component";
import {CreateEventComponent} from "./orientation/pages/create-event/create-event.component";

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
  { path: 'home', component: StudentHomeComponent },
  { path: 'vocational-tests', component: VocationalTestsComponent },
  { path: 'vocational-events', component: VocationalEventsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'vocational-tests/assessment/questions', component: QuestionsComponent},

  { path: 'dashboard', component: SpecialistPanelComponent },
  { path: 'evaluation', component: EvaluationTestComponent},
  { path: 'create-evaluation', component: CreateEvaluationComponent},
  { path: 'create-event', component: CreateEventComponent},
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
