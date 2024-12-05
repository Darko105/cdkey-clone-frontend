import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderCreationBase, UserLoginResponseBase } from '../../shared/models/user/user-login-base';
import { RandomUtil } from '../../shared/models/random-util';
import { error } from 'console';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  name!: string;
  kinguinId!: number;
  price!: number;
  img!: string;
  tax!: number;

  constructor(
    public ps:ProductService,
    public us:UserService,
    public ar:ActivatedRoute,
    public router:Router
    ){

  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params) => {
      this.name= String(params.get('name'));
      this.kinguinId = Number(params.get('id'))
      this.price = Number(params.get('price'))
      this.img = String(params.get('img'));

    });

    this.tax = Number(this.price * 0.19);
}


checkout(){

  let cdkey = RandomUtil.randomString(16)

  let body:OrderCreationBase = new OrderCreationBase(
    this.kinguinId,
    this.img,
    this.name,
    7,
    cdkey,
    String(this.price)
  )
  this.us.setOrder(body,"users/"+body.user_id+"/orders").subscribe(
    data => {alert("thank you for buying from us");
      this.router.navigateByUrl('/user/MY ORDERS');
    },
    error => {console.error(error)}
  )
  console.log(body)
}

}
