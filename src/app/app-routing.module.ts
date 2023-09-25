import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from "./public/pages/landing/landing.component";
import { NotFoundComponent} from "./public/pages/not-found/not-found.component";
import { LoginComponent} from "./public/components/login/login.component";
import { ForgotpasswordComponent} from "./public/components/forgotpassword/forgotpassword.component";
import { NavbarComponent} from "./gocareer/components/navbar/navbar.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkpoint', component: ForgotpasswordComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
