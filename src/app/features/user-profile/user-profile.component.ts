import { Product } from './../../shared/models/product';
import { ProductService } from './../../core/services/product.service';
import { UserService } from './../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderResponseBase, ResponseBillingAddressesBase, UserLoginResponseBase } from '../../shared/models/user/user-login-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  selectedSection!:string;
  userData!:UserLoginResponseBase;
  UserAddresses!:ResponseBillingAddressesBase[] | [];
  userOrders!:OrderResponseBase[] | [];
  products: Product[] = []

  constructor(
    public ar:ActivatedRoute,
    public router:Router,
    public userService:UserService,
    public ps:ProductService
  ){
    this.ar.params.subscribe(
      data => {
        this.selectedSection = data['selected'];
      },
      error => {
        this.selectedSection = 'MY ACCOUNT'; // Default section
      }
    )
  }

  ngOnInit():void{
    this.userData = JSON.parse(localStorage.getItem('userData')!)
    if(!this.userData){
        this.router.navigateByUrl('/login-signup');
    }else{
      this.getUserAddressBook(this.userData.id).subscribe(
          data =>{
            this.UserAddresses = data;
          },
          error => {
            alert(error.message);
          }
      );


      this.loadUserOrders(this.userData.id).subscribe(
        data => {
          this.userOrders = data;
        },
        error => {
          console.error(error)
        }
      )

    }
  }

  getUserAddressBook(id:number): Observable<ResponseBillingAddressesBase[]>{
    return this.userService.getUserBillingAdresses('users/'+id+"/billing-address")
  }

  loadUserOrders(id:number):Observable<OrderResponseBase[]>{
    return this.userService.getUserOrders("users/"+id+"/orders");
  }


  deleteAccount(){
    let userresponse = confirm("Are you sur you want to delete your account. You wont be able to recover it back!")
    if(userresponse){
      if(this.userService.deleteUser("users/"+this.userData+"/delete")){
        localStorage.removeItem('userData');
      }
      this.router.navigateByUrl("/");
    }
  }

  logout(){
      localStorage.removeItem('userData');
      this.router.navigateByUrl("/");
  }

  clLogout(){
    window.location.reload()
  }



  // Method to update the selected section
  updateSection(section: string) {
    this.selectedSection = section;
  }
}
