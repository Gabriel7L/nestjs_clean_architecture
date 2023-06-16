import Orders from '@domain/orders/orders';
import IOrdersRepository from '@domain/orders/repositories/iorders.repository';
import { Repository } from 'typeorm';

export default class OrdersTypeOrmRepository implements IOrdersRepository {
  constructor(private ordersRepo: Repository<Orders>) {}

  async Create(item: Orders): Promise<Orders> {
    const data = this.ordersRepo.create(item);
    return await this.ordersRepo.save(data);
  }
  Update(item: Orders): Promise<Orders> {
    throw new Error('Method not implemented.');
  }
  GetById(id: number): Promise<Orders> {
    throw new Error('Method not implemented.');
  }
  GetAll(
    page: number,
    recordsPerPage: number,
    id_company: number,
  ): Promise<{ total: number; data: Orders[] }> {
    throw new Error('Method not implemented.');
  }
  GetOrdersByCustomerId(customerId: string): Promise<Orders[]> {
    throw new Error('Method not implemented.');
  }
}
