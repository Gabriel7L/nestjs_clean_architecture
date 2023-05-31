import Products from '@domain/products/products';
test('Deve criar um produto', () => {
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
    max_discount_percent: 0.5,
    dt_purchase: new Date(),
    control_stock: false,
    length: 3,
    width: 2,
    height: 1,
    active: true,
  };
  const product = new Products(input, 1);

  expect(product.product).toBe(input.product);
  expect(product.price_purchase).toBe(input.price_purchase);
  expect(product.price_selling).toBe(input.price_selling);
  expect(product.code).toBe(input.code);
  expect(product.minimum).toBe(input.minimum);
  expect(product.maximum).toBe(input.maximum);
  expect(product.active).toBeTruthy();
  expect(product.floating).toBe(input.floating);
  expect(product.current).toBe(input.current);
  expect(product.profit_percent).toBe(input.profit_percent);
  expect(product.max_discount_percent).toBe(input.max_discount_percent);
  expect(product.dt_purchase).toBe(input.dt_purchase);
  expect(product.control_stock).toBeFalsy();
  expect(product.length).toBe(input.length);
  expect(product.width).toBe(input.width);
  expect(product.height).toBe(input.height);
  expect(product.id_company).toBe(1);
});
