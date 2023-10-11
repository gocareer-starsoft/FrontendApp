import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./shared/material.module";
import { AppComponent } from './app.component';

import { UsersService } from './public/services/users.service';
import { CareersService } from "./public/services/careers.service";

import { HeaderComponent } from './public/components/header/header.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { LandingComponent } from './public/pages/landing/landing.component';
import { ProfileComponent } from './student/components/profile/profile.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RectangularCardComponent } from './student/components/rectangular-card/rectangular-card.component';
import { SearchComponent } from './student/components/search/search.component';
import { PrincipalPageSpecialistComponent } from './specialist/pages/principal-page-specialist/principal-page-specialist.component';
import { UsersOfSpecialistComponent } from './specialist/pages/users-of-specialist/users-of-specialist.component';
import { CardUserComponent } from './specialist/components/card-user/card-user.component';
import { CardSpecialistComponent } from './specialist/components/card-specialist/card-specialist.component';
import { EmailInputComponent } from './public/components/email-input/email-input.component';
import { PasswordInputComponent } from './public/components/password-input/password-input.component';
import { SignupComponent } from './public/pages/signup/signup.component';
import { NameInputComponent } from './public/components/name-input/name-input.component';
import { ForgotPasswordComponent } from './public/pages/forgot-password/forgot-password.component';
import { HomeStComponent } from './student/pages/home-st/home-st.component';
import { SettingsMenuComponent } from './public/components/settings-menu/settings-menu.component';
import { NavMenuComponent } from './public/components/nav-menu/nav-menu.component';
import { HomeSpComponent } from './specialist/pages/home-sp/home-sp.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';

import { CareerOptionsComponent } from './public/pages/career-options/career-options.component';

import { TalksCardComponent } from './public/components/talks-card/talks-card.component';
import { TestsCardComponent } from './public/components/tests-card/tests-card.component';
import { TalksStComponent } from './student/pages/talks-st/talks-st.component';
import { TestsStComponent } from './student/pages/tests-st/tests-st.component';
import { TalksSpComponent } from './specialist/pages/talks-sp/talks-sp.component';
import { TestsSpComponent } from './specialist/pages/tests-sp/tests-sp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ProfileComponent,
    NotFoundComponent,
    LoginComponent,
    RectangularCardComponent,
    SearchComponent,
    PrincipalPageSpecialistComponent,
    UsersOfSpecialistComponent,
    CardUserComponent,
    CardSpecialistComponent,
    EmailInputComponent,
    PasswordInputComponent,
    SignupComponent,
    NameInputComponent,
    ForgotPasswordComponent,
    HomeStComponent,
    SettingsMenuComponent,
    NavMenuComponent,
    HomeSpComponent,
    NavbarComponent,
    CareerOptionsComponent,
    TalksCardComponent,
    TestsCardComponent,
    TalksStComponent,
    TestsStComponent,
    TalksSpComponent,
    TestsSpComponent

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
