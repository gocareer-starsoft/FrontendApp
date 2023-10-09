export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  avatarUrl: string;
  bio: string;
  specialist: boolean;
  constructor() {
    this.id = 1;
    this.name = "Jack";
    this.lastname = "Arana";
    this.email = "example@gmail.com";
    this.password = "";
    this.phone = "";
    this.avatarUrl = "assets/img/home-test.jpg";
    this.bio = "Add your bio here";
    this.specialist = false;
  }
}
