import { Component } from '@angular/core';

@Component({
  selector: 'app-see-all-students',
  templateUrl: './see-all-students.component.html',
  styleUrls: ['./see-all-students.component.css']
})
export class SeeAllStudentsComponent {
  users = [
    {name: "Leo", image: "https://thispersondoesnotexist.com/"},
    {name: "Marco", image: "https://thispersondoesnotexist.com/"},
    {name: "Mateo", image: "https://thispersondoesnotexist.com/"},
    {name: "Luis", image: "https://thispersondoesnotexist.com/"},
    {name: "Raul", image: "https://thispersondoesnotexist.com/"},
    {name: "Lorenzo", image: "https://thispersondoesnotexist.com/"}
  ]
}
