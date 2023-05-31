import Orders from '@domain/orders/orders';
import IOrdersRepository from '@domain/orders/repositories/iorders.repository';
import { Repository } from 'typeorm';

export default class OrdersTypeOrmRepository implements IOrdersRepository {
  constructor(private ordersRepo: Repository<Orders>) {}

  async create(item: Orders): Promise<Orders> {
    const data = this.ordersRepo.create(item);
    return await this.ordersRepo.save(data);
  }
  update(item: Orders): Promise<Orders> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Orders> {
    throw new Error('Method not implemented.');
  }
  getAll(
    page: number,
    recordsPerPage: number,
    id_company: number,
  ): Promise<{ total: number; data: Orders[] }> {
    throw new Error('Method not implemented.');
  }
  getOrdersByCustomerId(customerId: string): Promise<Orders[]> {
    throw new Error('Method not implemented.');
  }
}
