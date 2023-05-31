import { IRepository } from '@domain/basic/irepository';
import Orders from '../orders';

export default interface IOrdersRepository extends IRepository<Orders> {
  getOrdersByCustomerId(customerId: string): Promise<Orders[]>;
}
