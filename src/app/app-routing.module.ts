import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent} from "./shared/pages/not-found/not-found.component";
import { SigninComponent} from "./iam/pages/signin/signin.component";
import { SignupComponent} from "./iam/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./iam/pages/forgot-password/forgot-password.component";
import { StudentHomeComponent } from "./profiles/pages/student-home/student-home.component";
import { VocationalEventsComponent } from "./orientation/pages/vocational-events/vocational-events.component";
import { VocationalTestsComponent } from "./assessment/pages/vocational-tests/vocational-tests.component";
import { SpecialistPanelComponent } from "./profiles/pages/specialist-panel/specialist-panel.component";
import {ResultsComponent} from "./assessment/pages/results/results.component";
import {QuestionsComponent} from "./assessment/pages/questions/questions.component";
import {CreateEvaluationComponent} from "./assessment/pages/create-evaluation/create-evaluation.component";
import {CreateEventComponent} from "./orientation/pages/create-event/create-event.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in', component: SigninComponent, data: { title: 'SignIn' }
  },
  {
    path: 'sign-up', component: SignupComponent, data: { title: 'SignUp' }
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Forgot Password' }
  },
  { path: 'home', component: StudentHomeComponent, data: { title: 'Home' } },
  { path: 'vocational-tests', component: VocationalTestsComponent, data: { title: 'Tests' } },
  { path: 'vocational-events', component: VocationalEventsComponent, data: { title: 'Events' } },
  { path: 'results', component: ResultsComponent, data: { title: 'Results' }  },
  { path: 'vocational-tests/assessment/questions', component: QuestionsComponent},

  { path: 'dashboard', component: SpecialistPanelComponent, data: { title: 'Dashboard' }  },
  { path: 'create-evaluation', component: CreateEvaluationComponent, data: { title: 'Evaluation' } },
  { path: 'create-event', component: CreateEventComponent, data: { title: 'Event' }},
  { path: '**', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
