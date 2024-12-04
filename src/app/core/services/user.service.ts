import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderResponseBase, ResponseBillingAddressesBase, UserCreationBase, UserCreationResponseBase, UserLoginBase, UserLoginResponseBase } from '../../shared/models/user/user-login-base';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fastApiUrl:string;

  // check if the user is logedIn accross the app
  private userIsLoggedInSource = new BehaviorSubject<boolean>(false);
  userIsLoggedIn$ = this.userIsLoggedInSource.asObservable();

  public UserData!: UserLoginResponseBase;

  constructor(public hc:HttpClient) {
    this.fastApiUrl = 'http://127.0.0.1:8000/'
  }

  loginUser(body:UserLoginBase,endPoint:string){
    return this.hc.post<UserLoginResponseBase>(this.fastApiUrl + endPoint,body);
  }

  registerUser(body:UserCreationBase,param:string){
    return this.hc.post<UserCreationResponseBase>(this.fastApiUrl + param,body);
  }

  // updateUserInformation(body,endpoint:string){
  //   return this.hc.put<
  // }

  getUserBillingAdresses(param:string){
    return this.hc.get<ResponseBillingAddressesBase[]>(this.fastApiUrl + param);
  }


  getUserOrders(endPoint:string): Observable<OrderResponseBase[]>{
    return this.hc.get<OrderResponseBase[]>(this.fastApiUrl + endPoint)
  }





  makeUserLogedIn(user:UserLoginResponseBase) {

    let loginSuccess = false;
    if (user.id && user.email) {
      this.userIsLoggedInSource.next(true);
      loginSuccess = true
    }
    return loginSuccess; // Simulate response
  }

}
