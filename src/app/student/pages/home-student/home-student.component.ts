import { Component } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent {
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
