import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email,Validators.required]),
    username:new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required)
  })
  constructor(private _userservice: UserService) { }
    message ='';
  ngOnInit() {
  }

  register(){
    if(!this.registerForm.valid || this.registerForm.controls.password.value != this.registerForm.controls.cpass.value){
      console.log('invalid from');
      // return;
    }
    this._userservice.register(this.registerForm.value)
    .subscribe(data=>{
      this.message = "User registed successfully!"
        this.registerForm.reset();
      },
      err=>console.error(err)      
  );
}

}
