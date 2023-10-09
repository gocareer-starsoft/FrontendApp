import { Component } from '@angular/core';

@Component({
  selector: 'app-tests-sp',
  templateUrl: './tests-sp.component.html',
  styleUrls: ['./tests-sp.component.css']
})
export class TestsSpComponent {
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
