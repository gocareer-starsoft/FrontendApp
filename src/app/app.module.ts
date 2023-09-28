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
import { NavbarComponent } from './gocareer/components/navbar/navbar.component';
import { HomeComponent } from './gocareer/pages/home/home.component';
import { ProfileComponent } from './gocareer/pages/profile/profile.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { NewuserComponent } from './public/components/newuser/newuser.component';
import { LoginComponent } from './public/components/login/login.component';
import { ForgotpasswordComponent } from './public/components/forgotpassword/forgotpassword.component';
import { RectangularCardComponent } from './gocareer/components/rectangular-card/rectangular-card.component';
import { SearchComponent } from './gocareer/components/search/search.component';
import { PrincipalPageSpecialistComponent } from './specialist/pages/principal-page-specialist/principal-page-specialist.component';
import { UsersOfSpecialistComponent } from './specialist/pages/users-of-specialist/users-of-specialist.component';
import { CardUserComponent } from './specialist/components/card-user/card-user.component';
import { CardSpecialistComponent } from './specialist/components/card-specialist/card-specialist.component';

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
    NewuserComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RectangularCardComponent,
    SearchComponent,
    PrincipalPageSpecialistComponent,
    UsersOfSpecialistComponent,
    CardUserComponent,
    CardSpecialistComponent,

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
