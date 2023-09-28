export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
  description: string;
  specialist: boolean;
  constructor() {
    this.id=0;
    this.name='';
    this.lastname='';
    this.email='';
    this.password='';
    this.phone=0;
    this.description='';
    this.specialist=false;
  }
}
