import { Component } from '@angular/core';

@Component({
  selector: 'app-talks-with-specialists',
  templateUrl: './talks-with-specialists.component.html',
  styleUrls: ['./talks-with-specialists.component.css']
})
export class TalksWithSpecialistsComponent {
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
