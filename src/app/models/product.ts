export interface Product{
  pid: number;
  title: string;
  product_pic: string | null;
  description: string | null;
  bid_status: string;
  created_at: number;
  uid: number;
  sold_status: string | null;
  sold_to: number | null;
}
