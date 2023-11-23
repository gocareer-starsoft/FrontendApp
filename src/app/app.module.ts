import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./shared/material.module";
import { AppComponent } from './app.component';

import { UsersService } from './iam/services/users.service';
import { CareersService } from "./assessment/services/careers.service";

import { LandingHeaderComponent } from './public/components/landing-header/landing-header.component';
import { LandingFooterComponent } from './public/components/landing-footer/landing-footer.component';
import { LandingPageComponent } from './public/pages/landing-page/landing-page.component';
import { ProfileOfUserComponent } from './public/components/profile-of-user/profile-of-user.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { LoginComponent } from './iam/pages/login/login.component';
import { SearchComponent } from './public/components/search/search.component';
import { InputOfEmailComponent } from './public/components/input-of-email/input-of-email.component';
import { InputOfPasswordComponent } from './public/components/input-of-password/input-of-password.component';
import { SignupComponent } from './iam/pages/signup/signup.component';
import { InputOfNameComponent } from './public/components/input-of-name/input-of-name.component';
import { ForgotPasswordComponent } from './iam/pages/forgot-password/forgot-password.component';
import { StudentHomeComponent } from './public/pages/student-home/student-home.component';
import { MenuOfSettingComponent } from './public/components/menu-of-setting/menu-of-setting.component';
import { MenuOfNavigationComponent } from './public/components/menu-of-navigation/menu-of-navigation.component';
import { SpecialistPanelComponent } from './public/pages/specialist-panel/specialist-panel.component';
import { BarOfNavigationComponent } from './public/components/bar-of-navigation/bar-of-navigation.component';

import { ResultsComponent } from './assessment/pages/results/results.component';

import { VocationalEventsComponent } from './orientation/pages/vocational-events/vocational-events.component';
import { VocationalTestsComponent } from './assessment/pages/vocational-tests/vocational-tests.component';
import { QuestionsComponent } from './assessment/pages/questions/questions.component';
import { TestEvaluationComponent } from './assessment/components/test-evaluation/test-evaluation.component';
import { EvaluationTestComponent } from './public/pages/evaluation-test/evaluation-test.component';
import { CardOfInfoComponent } from './public/components/card-of-info/card-of-info.component';
import { CreateEvaluationComponent } from './assessment/pages/create-evaluation/create-evaluation.component';
import { CreateEventComponent } from './orientation/pages/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingPageComponent,
    ProfileOfUserComponent,
    NotFoundComponent,
    LoginComponent,
    SearchComponent,
    InputOfEmailComponent,
    InputOfPasswordComponent,
    SignupComponent,
    InputOfNameComponent,
    ForgotPasswordComponent,
    StudentHomeComponent,
    MenuOfSettingComponent,
    MenuOfNavigationComponent,
    SpecialistPanelComponent,
    BarOfNavigationComponent,
    ResultsComponent,
    VocationalEventsComponent,
    VocationalTestsComponent,
    QuestionsComponent,
    TestEvaluationComponent,
    EvaluationTestComponent,
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
  providers: [UsersService, CareersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
