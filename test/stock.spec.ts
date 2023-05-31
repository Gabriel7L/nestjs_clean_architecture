import Stocks from '@domain/stocks/stocks';

describe('Stock tests', () => {
  it('shoulb be able to create a stock and create products stock and operates', () => {
    const stock = new Stocks(
      {
        stock: 'teste',
        place: 'Casa',
        active: true,
      },
      1,
    );
    expect(stock.stock).toBe('teste');
    expect(stock.active).toBeTruthy();
    stock.CreateProductsStock({ id_product: 1, quantity: 10 });

    expect(stock.stockItems[0].id_product).toBe(1);
    expect(stock.stockItems[0].quantity).toBe(10);

    stock.DropProductsStock({ id_product: 1, quantity: 3 });
    expect(stock.stockItems[0].quantity).toBe(7);

    stock.AddProductsStock({ id_product: 1, quantity: 2 });
    expect(stock.stockItems[0].quantity).toBe(9);

    stock.AddProductsStock({ id_product: 3, quantity: 10 });

    expect(stock.stockItems.length).toBe(1);
    expect(stock.stockItems[0].quantity).toBe(9);
  });
});
