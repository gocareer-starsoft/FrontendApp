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
    this.id = 0;
    this.name = "jk";
    this.lastname = "";
    this.email = "";
    this.password = "";
    this.phone = "";
    this.avatarUrl = "";
    this.bio = "Add your bio here";
    this.specialist = false;
  }
}
