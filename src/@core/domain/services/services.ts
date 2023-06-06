import { Basic } from '@domain/basic/basic';

export default class Services extends Basic {
  service: string;
  price: number;
  max_discount: number;
  id_company: number;
  constructor(service: string, price: number, max_discount: number) {
    super();
    if (!service) {
      return;
    }
    this.service = service;
    this.price = price;
    this.max_discount = max_discount;
  }
}
