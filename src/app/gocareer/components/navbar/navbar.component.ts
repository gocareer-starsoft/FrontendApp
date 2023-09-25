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
    this.router.navigate(['/profile']);
  }
  redirectToNotifications() {
    this.router.navigate(['/notifications']);
  }
  redirectToSpecialists() {
    this.router.navigate(['/notifications']);
  }
  redirectToTest() {
    this.router.navigate(['/notifications']);
  }
  redirectToCareer() {
    this.router.navigate(['/notifications']);
  }
  signOut() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
}
