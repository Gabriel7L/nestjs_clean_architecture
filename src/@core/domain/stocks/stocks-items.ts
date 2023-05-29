import { Basic } from '@domain/basic/basic';
import { ProductsStockInput } from 'src/@core/application/stocks/products-stock-input';

export default class StocksItems extends Basic {
  id_product: number;
  quantity: number;
  constructor(props: ProductsStockInput) {
    super();
    Object.assign(this, props);
  }
}
