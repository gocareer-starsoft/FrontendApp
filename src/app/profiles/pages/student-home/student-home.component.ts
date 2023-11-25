import { Component } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {
  cardData: { imageUrl: string, title: string, subtitle: string, buttonText: string, routerLink: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Vocational Tests',
      subtitle: 'Take a test to find out what you are good at',
      buttonText: 'Go',
      routerLink: '/vocational-tests' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Vocational Events',
      subtitle: 'Chat with our specialists',
      buttonText: 'Go',
      routerLink: '/vocational-events' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Last result',
      subtitle: 'Look at your career options',
      buttonText: 'See',
      routerLink: '/results' },
  ];
}
