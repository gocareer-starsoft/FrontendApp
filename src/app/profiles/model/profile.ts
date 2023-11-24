export class Profile {
  id: number;
  fullName: string;
  email: string;
  description: string;
  isSpecialist: boolean;
  constructor() {
    this.id = 0;
    this.fullName = "";
    this.email = "";
    this.description = "";
    this.isSpecialist = false;
  }
}
