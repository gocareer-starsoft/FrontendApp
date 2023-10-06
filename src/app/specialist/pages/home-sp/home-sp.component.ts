import { Component } from '@angular/core';

@Component({
  selector: 'app-home-sp',
  templateUrl: './home-sp.component.html',
  styleUrls: ['./home-sp.component.css']
})
export class HomeSpComponent {
  cardData: { imageUrl: string, textInfo: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' },
    { imageUrl: 'assets/img/home-charla.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' },
    { imageUrl: 'assets/img/home-specialists.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' }
  ];
}
