import { UserCreationBase, UserLoginResponseBase, UserCreationResponseBase } from './../../shared/models/user/user-login-base';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { UserLoginBase } from '../../shared/models/user/user-login-base';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [

    CommonModule,
    FormsModule
  ],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  loginBodyBase!:UserLoginBase;
  userLoginResponseBase!: UserLoginResponseBase;
  userCreationResponseBase!:UserCreationResponseBase;

constructor(public userService:UserService,public router:Router){}

ngOnInit():void{
  let user:UserLoginResponseBase = JSON.parse(localStorage.getItem('userData')!);
  if(user){
    this.router.navigateByUrl('/user/MY ACCOUNT');
  }
}

  login(f: NgForm) {
    let email:string = f.value["email"];
    let password:string = f.value["password"];

    if(email != '' && email.includes('@') && password != "" && password.length >= 8){

      this.loginBodyBase = new UserLoginBase(email,password);
      this.userService.loginUser(this.loginBodyBase,"users/login").subscribe(
        data => {
          this.userLoginResponseBase = data;
          if(this.userService.makeUserLogedIn(this.userLoginResponseBase)){
            localStorage.setItem('userData', JSON.stringify(data));
            this.router.navigateByUrl('/');
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }


  regester(f:NgForm){

    let first_name:string = f.value["firstName"];
    let last_name:string = f.value["lastName"];
    let email:string = f.value["email"];
    let email2:string = f.value["email2"];
    let password:string = f.value["password"];
    let password2:string = f.value["password2"];



    if(
      first_name != "" &&
      last_name != "" &&
      email != "" && email.includes('@') && email.includes('.') && email == email2 &&
      password != "" && password.length >= 8 && password == password2
    ){

      let user:UserCreationBase = new UserCreationBase(first_name,last_name,email,password);

      this.userService.registerUser(user,"users/").subscribe(
        data => {
          this.userCreationResponseBase = data;
          if(this.userService.makeUserLogedIn(this.userCreationResponseBase)){
            localStorage.setItem('userData', JSON.stringify(data));
            this.router.navigateByUrl('/');
          }


        },
        error => {
          console.log(error);
        }
      );

    }

  }

}
