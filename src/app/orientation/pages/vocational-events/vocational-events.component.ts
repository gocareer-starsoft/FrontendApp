import { Component } from '@angular/core';

@Component({
  selector: 'app-vocational-events',
  templateUrl: './vocational-events.component.html',
  styleUrls: ['./vocational-events.component.css']
})
export class VocationalEventsComponent {

  cardData: { imageUrl: string, title: string, subtitle: string, buttonText: string, routerLink: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      subtitle: '10/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-orientation/register'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Descubre las últimas tendencias tecnológicas.',
      subtitle: '15/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-events/orientation/register'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Participa en nuestro taller de desarrollo web.',
      subtitle: '10/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-events/orientation/register'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Seminario sobre innovación en inteligencia artificial.',
      subtitle: '10/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-events/orientation/register'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Conéctate con profesionales en nuestro evento de networking.',
      subtitle: '10/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-events/orientation/register'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Enfrenta nuestro desafío de programación en equipo.',
      subtitle: '10/11/2023',
      buttonText: 'Inscribirme',
      routerLink: '/st/vocational-events/orientation/register'
    }
  ];
}
