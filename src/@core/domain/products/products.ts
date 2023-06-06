import { Basic } from '@domain/basic/basic';
import { ProductsInput } from 'src/@core/application/products/products-input';

export default class Products extends Basic {
  id_category: number;
  id_supplier: number;
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
  id_company: number;
  constructor(props: ProductsInput, id_company: number) {
    super();
    if (!props) {
      return;
    }
    Object.assign(this, props);
    this.id_company = id_company;
  }
}
