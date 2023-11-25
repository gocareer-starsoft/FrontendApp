export class User {
  id: number;
  username: string;
  roles: string[];

  constructor() {
    this.id = 0;
    this.username = "";
    this.roles = [];
  }
}
