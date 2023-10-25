import { Component } from '@angular/core';

@Component({
  selector: 'app-qualify-tests',
  templateUrl: './qualify-tests.component.html',
  styleUrls: ['./qualify-tests.component.css']
})
export class QualifyTestsComponent {
  cardData: { imageUrl: string, title: string, amount: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '20 preguntas' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '10 preguntas' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '20 preguntas' }
  ];
}
