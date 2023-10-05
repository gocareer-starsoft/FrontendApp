import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./shared/material.module";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './public/components/header/header.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { LandingComponent } from './public/pages/landing/landing.component';
import { NavbarComponent } from './student/components/navbar/navbar.component';
import { HomeComponent } from './student/pages/home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
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
    ForgotPasswordComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
