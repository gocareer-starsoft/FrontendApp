import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NewuserComponent } from './register/components/newuser/newuser.component';
import { LoginComponent } from './register/components/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
