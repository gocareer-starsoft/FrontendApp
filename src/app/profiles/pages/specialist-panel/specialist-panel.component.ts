import { Component } from '@angular/core';

@Component({
  selector: 'app-specialist-panel',
  templateUrl: './specialist-panel.component.html',
  styleUrls: ['./specialist-panel.component.css']
})
export class SpecialistPanelComponent {
  cardData: { imageUrl: string, title: string, subtitle: string, buttonText: string, routerLink: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Create Test',
      subtitle: 'Create a test to find out what you are good at',
      buttonText: 'Go',
      routerLink: '/create-evaluation' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Create Event',
      subtitle: 'Chat with students',
      buttonText: 'Go',
      routerLink: '/create-event' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Meetings',
      subtitle: 'See your meetings',
      buttonText: 'See',
      routerLink: '/results' },
  ];
}
