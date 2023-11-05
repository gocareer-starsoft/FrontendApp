import { Component } from '@angular/core';

@Component({
  selector: 'app-talks-with-students',
  templateUrl: './talks-with-students.component.html',
  styleUrls: ['./talks-with-students.component.css']
})
export class TalksWithStudentsComponent {
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
