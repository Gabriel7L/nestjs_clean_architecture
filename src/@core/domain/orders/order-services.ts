export default class OrderServices {
  id_service: number;
  service_name: string;
  price: number;
  quantity: number;
  discount: number;
  constructor(
    id_service: number,
    service_name: string,
    price: number,
    quantity: number,
    discount?: number,
  ) {
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
