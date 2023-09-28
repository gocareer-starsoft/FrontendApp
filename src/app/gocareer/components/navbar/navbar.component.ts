import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private router: Router) { }

  signOut() {
    this.router.navigate(['/notifications']); // Redirige al componente de inicio de sesión
  }
}
