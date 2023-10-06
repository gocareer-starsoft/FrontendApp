import { Component } from '@angular/core';

@Component({
  selector: 'app-home-st',
  templateUrl: './home-st.component.html',
  styleUrls: ['./home-st.component.css']
})
export class HomeStComponent {
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
