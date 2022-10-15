export interface Product{
  pid?: number;
  title: string;
  product_pic?: string;
  description?: string;
  bid_status?: string;
  created_at?: number;
  uid?: number;
  sold_status?: string;
  sold_to?: number;
  base_price?: number;
  sold_price?: number;
  bid_end_date?: Date;
}
