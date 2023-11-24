import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./shared/material.module";
import { AppComponent } from './app.component';

import { UsersService } from './iam/services/users.service';
import { ResultsService } from "./assessment/services/results.service";

import { ProfileOfUserComponent } from './profiles/components/profile-of-user/profile-of-user.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SigninComponent } from './iam/pages/signin/signin.component';
import { SearchComponent } from './shared/components/search/search.component';
import { InputOfEmailComponent } from './iam/components/input-of-email/input-of-email.component';
import { InputOfPasswordComponent } from './iam/components/input-of-password/input-of-password.component';
import { SignupComponent } from './iam/pages/signup/signup.component';
import { InputOfNameComponent } from './profiles/components/input-of-name/input-of-name.component';
import { ForgotPasswordComponent } from './iam/pages/forgot-password/forgot-password.component';
import { StudentHomeComponent } from './profiles/pages/student-home/student-home.component';
import { MenuOfSettingComponent } from './shared/components/menu-of-setting/menu-of-setting.component';
import { NavbarOfSpecialistComponent } from './shared/components/navbar-of-specialist/navbar-of-specialist.component';
import { SpecialistPanelComponent } from './profiles/pages/specialist-panel/specialist-panel.component';
import { NavbarOfStudentComponent } from './shared/components/navbar-of-student/navbar-of-student.component';

import { ResultsComponent } from './assessment/pages/results/results.component';

import { VocationalEventsComponent } from './orientation/pages/vocational-events/vocational-events.component';
import { VocationalTestsComponent } from './assessment/pages/vocational-tests/vocational-tests.component';
import { QuestionsComponent } from './assessment/pages/questions/questions.component';
import { TestEvaluationComponent } from './assessment/components/test-evaluation/test-evaluation.component';
import { CardOfInfoComponent } from './shared/components/card-of-info/card-of-info.component';
import { CreateEvaluationComponent } from './assessment/pages/create-evaluation/create-evaluation.component';
import { CreateEventComponent } from './orientation/pages/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileOfUserComponent,
    NotFoundComponent,
    SigninComponent,
    SearchComponent,
    InputOfEmailComponent,
    InputOfPasswordComponent,
    SignupComponent,
    InputOfNameComponent,
    ForgotPasswordComponent,
    StudentHomeComponent,
    MenuOfSettingComponent,
    NavbarOfSpecialistComponent,
    SpecialistPanelComponent,
    NavbarOfStudentComponent,
    ResultsComponent,
    VocationalEventsComponent,
    VocationalTestsComponent,
    QuestionsComponent,
    TestEvaluationComponent,
    CardOfInfoComponent,
    CreateEvaluationComponent,
    CreateEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
