import { IRepository } from '@domain/basic/irepository';
import Employees from '../employees';

export default interface IEmployeesRepository extends IRepository<Employees> {
  findByName(name: string): Promise<Employees[]>;
}
