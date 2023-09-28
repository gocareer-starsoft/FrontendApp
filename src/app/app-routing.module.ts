import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from "./public/pages/landing/landing.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/components/login/login.component";
import { ForgotpasswordComponent} from "./public/components/forgotpassword/forgotpassword.component";
import { NewuserComponent} from "./public/components/newuser/newuser.component";
import { HomeComponent } from "./gocareer/pages/home/home.component";
import { ProfileComponent } from "./gocareer/pages/profile/profile.component";
import {
  PrincipalPageSpecialistComponent
} from "./specialist/pages/principal-page-specialist/principal-page-specialist.component";
import {UsersOfSpecialistComponent} from "./specialist/pages/users-of-specialist/users-of-specialist.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: NewuserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkpoint', component: ForgotpasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'specialist', component: PrincipalPageSpecialistComponent },
  { path: 'users-specialist', component:UsersOfSpecialistComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
