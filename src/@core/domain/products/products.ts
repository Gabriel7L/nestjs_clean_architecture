import { Basic } from '@domain/basic/basic';

export default class Products extends Basic {
  product: string;
  constructor(product: string) {
    super();
    this.product = product;
  }
}
