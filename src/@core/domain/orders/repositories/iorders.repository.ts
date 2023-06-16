import { IRepository } from '@domain/basic/irepository';
import Orders from '../orders';

export default interface IOrdersRepository extends IRepository<Orders> {
  GetOrdersByCustomerId(customerId: string): Promise<Orders[]>;
}
