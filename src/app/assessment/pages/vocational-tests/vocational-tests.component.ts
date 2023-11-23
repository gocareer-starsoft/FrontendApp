import { Component } from '@angular/core';

@Component({
  selector: 'app-vocational-tests',
  templateUrl: './vocational-tests.component.html',
  styleUrls: ['./vocational-tests.component.css']
})
export class VocationalTestsComponent {

  cardData: { imageUrl: string, title: string, subtitle: string, buttonText: string, routerLink: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Test Vocacional sobre competencias digitales.',
      subtitle: '20 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Prueba de Orientación Vocacional en Tecnología.',
      subtitle: '10 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Descubre tus competencias digitales con nuestro test.',
      subtitle: '15 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Evalúa tus conocimientos digitales con nuestro cuestionario.',
      subtitle: '20 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Realiza nuestro Test Vocacional en Competencias Digitales.',
      subtitle: '10 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
    {
      imageUrl: 'assets/img/home-test.jpg',
      title: 'Test de Competencias Digitales: Descubre tus fortalezas.',
      subtitle: '20 preguntas',
      buttonText: 'Comenzar Ahora',
      routerLink: '/st/vocational-tests/assessment/questions'
    },
  ];
}
