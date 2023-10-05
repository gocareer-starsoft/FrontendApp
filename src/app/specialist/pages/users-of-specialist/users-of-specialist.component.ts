import { Component } from '@angular/core';

@Component({
  selector: 'app-users-of-specialist',
  templateUrl: './users-of-specialist.component.html',
  styleUrls: ['./users-of-specialist.component.css']
})
export class UsersOfSpecialistComponent {
  users = [
    {name: "Leo", image: "https://thispersondoesnotexist.com/"},
    {name: "Marco", image: "https://thispersondoesnotexist.com/"},
    {name: "Mateo", image: "https://thispersondoesnotexist.com/"},
    {name: "Luis", image: "https://thispersondoesnotexist.com/"},
    {name: "Raul", image: "https://thispersondoesnotexist.com/"},
    {name: "Lorenzo", image: "https://thispersondoesnotexist.com/"}
  ]
}
