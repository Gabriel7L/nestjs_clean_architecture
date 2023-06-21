import Orders from '@domain/orders/orders';
import Products from '@domain/products/products';
test('Deve criar uma ordem de produtos', () => {
  const input = {
    product: 'tábua',
    price_selling: 230.4,
    price_purchase: 120.2,
    code: '1230-123sd1-123',
    minimum: 0,
    maximum: 500,
    floating: 0,
    current: 0,
    profit_percent: 1.2,
    max_discount_percent: 0,
    dt_purchase: new Date(),
    control_stock: false,
    length: 3,
    width: 2,
    height: 1,
    active: true,
  };
  const input2 = {
    product: 'mármore',
    price_selling: 520.4,
    price_purchase: 325.2,
    code: '1230-123sd1-123',
    minimum: 0,
    maximum: 500,
    floating: 0,
    current: 0,
    profit_percent: 1.2,
    max_discount_percent: 0.2,
    dt_purchase: new Date(),
    control_stock: false,
    length: 3,
    width: 2,
    height: 1,
    active: true,
  };
  const product1 = new Products(input, 1);
  const product2 = new Products(input2, 1);
  const order = new Orders({ description: 'Teste', discount: 0 }, 1);
  order.addProduct(product1, 3);
  order.addProduct(product2, 1, 0.2);
  expect(order.total_value).toBe(0);
  expect(order.getTotal()).toBe(1107.52);
});

test('Deve retornar erro no desconto', () => {
  const input = {
    product: 'tábua',
    price_selling: 230.4,
    price_purchase: 120.2,
    code: '1230-123sd1-123',
    minimum: 0,
    maximum: 500,
    floating: 0,
    current: 0,
    profit_percent: 1.2,
    max_discount_percent: 0,
    dt_purchase: new Date(),
    control_stock: false,
    length: 3,
    width: 2,
    height: 1,
    active: true,
  };
  const product1 = new Products(input, 1);
  const order = new Orders({ description: 'Teste', discount: 0 }, 1);
  expect(() => order.addProduct(product1, 3, -0.2)).toThrow(
    new Error('Invalid discount'),
  );
});
