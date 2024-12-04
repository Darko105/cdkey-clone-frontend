import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CommonModule } from '@angular/common';
import { OrderCreationBase, UserLoginResponseBase } from '../../shared/models/user/user-login-base';

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
    public ar:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params) => {
      this.name= params.get('name');
      this.kinguinId = Number(params.get('id'))
      this.price = Number(params.get('price'))
      this.img = params.get('img');

    });

    this.tax = Number(this.price * 0.19);
}


checkout(){
  let user = localStorage.getItem('userData');

  let body:OrderCreationBase = new OrderCreationBase(this.kinguinId,this.img,this.name,id,new Date,"sdlfksodifnsodnfsodfn",String(this.price))
  this.us.setOrder()
}

}
