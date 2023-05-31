export type ProductsInput = {
  product: string;
  price_selling: number;
  price_purchase: number;
  code: string;
  minimum: number;
  maximum: number;
  floating: number;
  current: number;
  profit_percent: number;
  max_discount_percent: number;
  dt_purchase: Date;
  control_stock: boolean;
  length: number;
  width: number;
  height: number;
  active: boolean;
};
