import { Basic } from '@domain/basic/basic';
import Orders from './orders';

export default class OrderProducts extends Basic {
  id_product: number;
  value: number;
  quantity: number;
  discount: number;
  id_order: number;
  product: string;
  order: Orders;
  constructor(
    id_product: number,
    product: string,
    value: number,
    quantity: number,
    discount?: number,
  ) {
    super();
    this.id_product = id_product;
    this.value = value;
    this.quantity = quantity;
    this.product = product;
    this.discount = discount ? discount : 0;
  }

  getTotal(): number {
    return this.value * this.quantity * (1 - this.discount);
  }
}
