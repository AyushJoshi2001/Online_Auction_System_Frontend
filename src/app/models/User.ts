export interface User{

  uid?: number | null;
  name: string;
  email?: string;
  password?: string | null;
  profile_pic?: string;
  mobile?: string;
  address?: string;
  about?: string;
  isAdmin?: 0|1|null;

}
