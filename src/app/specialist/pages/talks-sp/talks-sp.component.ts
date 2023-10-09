import { Component } from '@angular/core';

@Component({
  selector: 'app-talks-sp',
  templateUrl: './talks-sp.component.html',
  styleUrls: ['./talks-sp.component.css']
})
export class TalksSpComponent {
  cardData: { imageUrl: string, title: string, date: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      date: '06/10/2023' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      date: '06/10/2023' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      date: '06/10/2023' }
  ];
}
