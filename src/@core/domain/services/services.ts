import { Basic } from '@domain/basic/basic';

export default class Services extends Basic {
  service: string;
  price: number;
  max_discount: number;
  constructor(service: string, price: number, max_discount: number) {
    super();
    this.service = service;
    this.price = price;
    this.max_discount = max_discount;
  }
}
