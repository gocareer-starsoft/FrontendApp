import { Component } from '@angular/core';

@Component({
  selector: 'app-talks-st',
  templateUrl: './talks-st.component.html',
  styleUrls: ['./talks-st.component.css']
})
export class TalksStComponent {
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
