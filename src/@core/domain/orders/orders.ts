import { Basic } from '@domain/basic/basic';
import Products from '@domain/products/products';
import OrderProducts from './order-products';
import OrderServices from './order-services';
import Services from '@domain/services/services';
import { HttpException } from '@nestjs/common';

export default class Orders extends Basic {
  description: string;
  orderProducts: OrderProducts[];
  orderServices: OrderServices[];
  total_value: number;
  discount: number;
  status: string;
  id_client: number;
  constructor(id_client: number) {
    super();
    if (!id_client) {
      return;
    }
    this.total_value = 0;
    this.discount = 0;
    this.id_client = id_client;
    this.orderProducts = [];
    this.orderServices = [];
  }

  addProduct(product: Products, quantity: number, discount = 0) {
    if (product.max_discount_percent >= discount && discount >= 0) {
      this.orderProducts.push(
        new OrderProducts(
          product.id,
          product.price_selling,
          quantity,
          discount,
        ),
      );
    } else {
      throw new HttpException('Discount invalid', 400);
    }
  }

  addService(service: Services, quantity: number, discount = 0) {
    if (service.max_discount >= discount && discount >= 0) {
      this.orderServices.push(
        new OrderServices(service.id, service.price, quantity, discount),
      );
    } else {
      throw new HttpException('Discount invalid', 400);
    }
  }

  getTotal() {
    let total = 0;
    this.orderProducts.forEach((orderProduct) => {
      total += orderProduct.getTotal();
    });

    this.orderServices.forEach((orderService) => {
      total += orderService.getTotal();
    });

    this.total_value = total;
    return total;
  }
}
