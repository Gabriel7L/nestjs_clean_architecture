import { Basic } from '@domain/basic/basic';

export default class OrderServices extends Basic {
  id_service: number;
  price: number;
  quantity: number;
  discount: number;
  id_order: number;
  constructor(
    id_service: number,
    price: number,
    quantity: number,
    discount?: number,
  ) {
    super();
    if (!id_service) {
      return;
    }
    this.id_service = id_service;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount ? discount : 0;
  }

  getTotal(): number {
    return this.price * this.quantity * (1 - this.discount);
  }
}
