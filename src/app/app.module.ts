import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './public/components/header/header.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { LandingComponent } from './public/pages/landing/landing.component';
import { NavbarComponent } from './gocareer/components/navbar/navbar.component';
import { HomeComponent } from './gocareer/pages/home/home.component';
import { ProfileComponent } from './gocareer/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
