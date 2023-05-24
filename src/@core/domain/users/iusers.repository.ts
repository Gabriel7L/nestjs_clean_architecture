import { IRepository } from '@domain/basic/irepository';
import Users from './users';

export interface IUsersRepository extends IRepository<Users> {
  getByEmail(email: string): Promise<Users>;
}
