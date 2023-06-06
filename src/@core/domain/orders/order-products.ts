import { Basic } from '@domain/basic/basic';
import Orders from './orders';

export default class OrderProducts extends Basic {
  id_product: number;
  value: number;
  quantity: number;
  discount: number;
  id_order: number;
  constructor(
    id_product: number,
    value: number,
    quantity: number,
    discount?: number,
  ) {
    super();
    if (!id_product) {
      return;
    }
    this.id_product = id_product;
    this.value = value;
    this.quantity = quantity;
    this.discount = discount ? discount : 0;
  }

  getTotal(): number {
    return this.value * this.quantity * (1 - this.discount);
  }
}
