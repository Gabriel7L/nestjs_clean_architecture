import { Basic } from '@domain/basic/basic';
import { ProductsStockInput } from 'src/@core/application/stocks/products-stock-input';
import StocksItems from './stocks-items';
import { StockInput } from 'src/@core/application/stocks/stock-input';

export default class Stocks extends Basic {
  stockItems: StocksItems[];
  stock: string;
  place: string;
  active: boolean;
  id_company: number;
  constructor(props: StockInput, id_company: number, id?: number) {
    super();
    Object.assign(this, props);
    this.stockItems = [];
    this.id = id;
    this.id_company = id_company;
  }

  AddProductsStock(product: ProductsStockInput) {
    const productsStock = new StocksItems(product);
    const indexOfProductStock = this.stockItems.findIndex(
      (item) => item.id_product === product.id_product,
    );
    if (indexOfProductStock >= 0) {
      this.stockItems[indexOfProductStock].quantity += productsStock.quantity;
    } else {
      this.stockItems.push(productsStock);
    }
  }

  DropProductsStock(product: ProductsStockInput) {
    const indexOfProductStock = this.stockItems.findIndex(
      (item) => item.id_product === product.id_product,
    );
    if (indexOfProductStock >= 0) {
      this.stockItems[indexOfProductStock].quantity -= product.quantity;
    }
  }
}
