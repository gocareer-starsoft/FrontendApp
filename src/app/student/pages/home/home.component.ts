import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  cardData: { imageUrl: string, textInfo: string }[] = [
    { imageUrl: 'assets/images/home-test.jpg',
      textInfo: 'Asiste a nuestra charla sobre competencias digitales. Disponible para todos los usuarios' },
    { imageUrl: 'assets/images/home-charla.jpg', textInfo: 'Texto de la tarjeta 2' },
    { imageUrl: 'assets/images/home-specialists.jpg', textInfo: 'Texto de la tarjeta 3' },
    { imageUrl: 'assets/images/home-especial.jpg', textInfo: 'Texto de la tarjeta 4' }
  ];

}
