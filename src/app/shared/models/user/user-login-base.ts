import { first, last } from "rxjs";

export class UserLoginBase {
  email: string;
  password: string;
  constructor(email:string,password:string){
    this.email = email;
    this.password = password;
  }
}

export class UserLoginResponseBase{
  id!: number;
  first_name!:string;
  last_name!:string;
  email!:string;
  phone_number!:string;
  staff!: boolean;
  created!:Date;
  updated!:Date;
  is_active!:boolean;

  constructor(
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone_number:string,
    staff:boolean,
    created:Date,
    updated:Date,
    is_active:boolean
  ){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.staff = staff;
    this.created = created;
    this.updated = updated;
    this.is_active = is_active;
  }
}


export class UserCreationBase{
  first_name:string;
  last_name:string;
  email:string;
  password:string;

  constructor(
    first_name:string,
    last_name:string,
    email:string,
    password:string
  ){
    this.first_name=first_name;
    this.last_name=last_name;
    this.email=email
    this.password=password

  }
}


export class UserCreationResponseBase{
  id!: number;
  first_name!:string;
  last_name!:string;
  email!:string;
  phone_number!:string;
  staff!: boolean;
  created!:Date;
  updated!:Date;
  is_active!:boolean;

  constructor(
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone_number:string,
    staff:boolean,
    created:Date,
    updated:Date,
    is_active:boolean
  ){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.staff = staff;
    this.created = created;
    this.updated = updated;
    this.is_active = is_active;
  }
}

