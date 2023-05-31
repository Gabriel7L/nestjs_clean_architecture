export default class OrderProducts {
  id_product: number;
  value: number;
  quantity: number;
  discount: number;
  product: string;
  constructor(
    id_product: number,
    product: string,
    value: number,
    quantity: number,
    discount?: number,
  ) {
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
