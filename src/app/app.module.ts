import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./shared/material.module";
import { AppComponent } from './app.component';

import { UsersService } from './public/services/users.service';
import { CareersService } from "./student/services/careers.service";

import { LandingHeaderComponent } from './public/components/landing-header/landing-header.component';
import { LandingFooterComponent } from './public/components/landing-footer/landing-footer.component';
import { LandingPageComponent } from './public/pages/landing-page/landing-page.component';
import { ProfileOfUserComponent } from './public/components/profile-of-user/profile-of-user.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { LoginComponent } from './public/pages/login/login.component';
import { CardOfHomeComponent } from './public/components/card-of-home/card-of-home.component';
import { SearchComponent } from './student/components/search/search.component';
import { SeeAllStudentsComponent } from './specialist/pages/see-all-students/see-all-students.component';
import { CardOfUserComponent } from './specialist/components/card-of-user/card-of-user.component';
import { CardOfSpecialistComponent } from './specialist/components/card-of-specialist/card-of-specialist.component';
import { InputOfEmailComponent } from './public/components/input-of-email/input-of-email.component';
import { InputOfPasswordComponent } from './public/components/input-of-password/input-of-password.component';
import { SignupComponent } from './public/pages/signup/signup.component';
import { InputOfNameComponent } from './public/components/input-of-name/input-of-name.component';
import { ForgotPasswordComponent } from './public/pages/forgot-password/forgot-password.component';
import { HomeStudentComponent } from './student/pages/home-student/home-student.component';
import { MenuOfSettingComponent } from './public/components/menu-of-setting/menu-of-setting.component';
import { MenuOfNavigationComponent } from './public/components/menu-of-navigation/menu-of-navigation.component';
import { HomeSpecialistComponent } from './specialist/pages/home-specialist/home-specialist.component';
import { BarOfNavigationComponent } from './public/components/bar-of-navigation/bar-of-navigation.component';

import { CareerOptionsComponent } from './student/pages/career-options/career-options.component';

import { CardOfTalkComponent } from './public/components/card-of-talk/card-of-talk.component';
import { CardOfTestComponent } from './public/components/card-of-test/card-of-test.component';
import { TalksWithSpecialistsComponent } from './student/pages/talks-with-specialists/talks-with-specialists.component';
import { VocationalTestsComponent } from './student/pages/vocational-tests/vocational-tests.component';
import { TalksWithStudentsComponent } from './specialist/pages/talks-with-students/talks-with-students.component';
import { QualifyTestsComponent } from './specialist/pages/qualify-tests/qualify-tests.component';
import { QuestionTestComponent } from './student/components/question-test/question-test.component';
import { TestQuestionComponent } from './student/pages/test-question/test-question.component';
import { TestEvaluationComponent } from './specialist/components/test-evaluation/test-evaluation.component';
import { QualifyTestComponent } from './specialist/pages/qualify-test/qualify-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingPageComponent,
    ProfileOfUserComponent,
    NotFoundComponent,
    LoginComponent,
    CardOfHomeComponent,
    SearchComponent,
    SeeAllStudentsComponent,
    CardOfUserComponent,
    CardOfSpecialistComponent,
    InputOfEmailComponent,
    InputOfPasswordComponent,
    SignupComponent,
    InputOfNameComponent,
    ForgotPasswordComponent,
    HomeStudentComponent,
    MenuOfSettingComponent,
    MenuOfNavigationComponent,
    HomeSpecialistComponent,
    BarOfNavigationComponent,
    CareerOptionsComponent,
    CardOfTalkComponent,
    CardOfTestComponent,
    TalksWithSpecialistsComponent,
    VocationalTestsComponent,
    TalksWithStudentsComponent,
    QualifyTestsComponent,
    QuestionTestComponent,
    TestQuestionComponent,
    TestEvaluationComponent,
    QualifyTestComponent

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
