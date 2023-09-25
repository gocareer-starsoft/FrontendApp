import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private router: Router) { }

  redirectToProfile() {
    this.router.navigate(['/profile']); // Redirige al componente de inicio de sesión
  }
  redirectToNotifications() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
  redirectToSpecialists() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
  redirectToTest() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
  redirectToCareer() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
  signOut() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
}
