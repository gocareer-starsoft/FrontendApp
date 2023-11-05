import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent {
  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigate(['login']); // Redirige al componente de inicio de sesión
  }
}
