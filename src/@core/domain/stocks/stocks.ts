import { Basic } from '@domain/basic/basic';
import { ProductsStockInput } from 'src/@core/application/stocks/products-stock-input';
import StocksItems from './stocks-items';
import { StockInput } from 'src/@core/application/stocks/stock-input';

export default class Stocks extends Basic {
  stockItems: StocksItems[];
  stock: string;
  active: boolean;
  constructor(props: StockInput) {
    super();
    Object.assign(this, props);
    this.stockItems = [];
  }

  AddProductsStock(product: ProductsStockInput) {
    const productsStock = new StocksItems(product);
    const indexOfProductStock = this.stockItems.findIndex(
      (item) => item.id_product === product.id_product,
    );
    if (indexOfProductStock >= 0) {
      this.stockItems[indexOfProductStock].quantity += productsStock.quantity;
    }
  }

  CreateProductsStock(product: ProductsStockInput) {
    const productsStock = new StocksItems(product);
    const indexOfProductStock = this.stockItems.findIndex(
      (item) => item.id_product === product.id_product,
    );
    if (indexOfProductStock == -1) {
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
