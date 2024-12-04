


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

export class UserUpdateInformationBase{
  first_name:string | null = null
  last_name:string | null = null
  email:string | null = null
  phone_number!:string;
  constructor(
    first_name:string | null,
    last_name:string,
    email:string,
    phone_number:string,
  ){

    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
  }
}

export class ResponseBillingAddressesBase{
    user_id:number;
    book_id:number;
    addresse1:string;
    addresse2:string | null = null;
    city:string;
    state:string;
    zip_code:string;
    country:string;

    constructor(
    user_id:number,
    book_id:number,
    addresse1:string,
    addresse2:string | null,
    city:string,
    state:string,
    zip_code:string,
    country:string,
    ){
    this.user_id =user_id;
    this.book_id = book_id;
    this.addresse1 = addresse1;
    this.addresse2 = addresse2
    this.city = city;
    this.state = state;
    this.zip_code = zip_code
    this.country = country;
    }
}



export class OrderResponseBase{
    id:number;
    product_id:number;
    user_id:number;
    order_date:Date;
    total_amount:number;
    product_img:string;
    product_name:string;
    key:string;

    constructor(
      id:number,
      product_id:number,
      user_id:number,
      order_date:Date,
      total_amount:number,
      product_img:string,
      product_name:string,
      key:string

    ){
      this.id = id;
      this.product_id = product_id;
      this.user_id = user_id;
      this.order_date = order_date;
      this.total_amount = total_amount
      this.product_img = product_img;
      this.product_name = product_name;
      this.key = key;
    }
}
