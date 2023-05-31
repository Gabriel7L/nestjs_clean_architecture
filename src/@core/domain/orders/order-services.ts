import { Basic } from '@domain/basic/basic';
import Orders from './orders';

export default class OrderServices extends Basic {
  id_service: number;
  service_name: string;
  price: number;
  quantity: number;
  discount: number;
  id_order: number;
  order: Orders;
  constructor(
    id_service: number,
    service_name: string,
    price: number,
    quantity: number,
    discount?: number,
  ) {
    super();
    this.id_service = id_service;
    this.service_name = service_name;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount ? discount : 0;
  }

  getTotal(): number {
    return this.price * this.quantity * (1 - this.discount);
  }
}
