import { Component } from '@angular/core';

@Component({
  selector: 'app-vocational-tests',
  templateUrl: './vocational-tests.component.html',
  styleUrls: ['./vocational-tests.component.css']
})
export class VocationalTestsComponent {
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
