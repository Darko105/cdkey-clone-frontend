import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { UserLoginBase, UserLoginResponseBase } from '../../../models/user/user-login-base';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  user!:UserLoginResponseBase;
  userExist!:boolean;
  userState:boolean;
  constructor(public userService:UserService){
    this.userState = false;
  }

  ngOnInit():void{
    this.user = JSON.parse(localStorage.getItem("userData")!)
  }




}
