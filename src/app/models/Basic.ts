export interface ProductAddDetails{
  title: string;
  product_pic?: string;
  description?: string;
  uid?: number;
  base_price?: number;
  bid_end_date?: Date;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  about: string;
}

