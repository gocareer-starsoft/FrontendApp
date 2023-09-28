import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {NgForm} from "@angular/forms";

// @ts-ignore
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  @Input() user: User;
  @ViewChild('newForm',{static: false}) newForm!: NgForm;
  @Output() userAdded=new EventEmitter<User>();
  hide = true;

  constructor() {
    this.user={} as User;
  }

  onSubmit(){
    if(this.newForm.form.valid){
      this.userAdded.emit(this.user);
    }else {
      console.log('Invalid data');
    }
  }
}
