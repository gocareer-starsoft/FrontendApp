import { Component } from '@angular/core';

@Component({
  selector: 'app-home-sp',
  templateUrl: './home-sp.component.html',
  styleUrls: ['./home-sp.component.css']
})
export class HomeSpComponent {
  cardData: { imageUrl: string, textInfo: string }[] = [
    { imageUrl: 'assets/images/home-test.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' },
    { imageUrl: 'assets/images/home-charla.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' },
    { imageUrl: 'assets/images/home-specialists.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales.' +
        'Disponible para todos los usuarios' }
  ];
}
