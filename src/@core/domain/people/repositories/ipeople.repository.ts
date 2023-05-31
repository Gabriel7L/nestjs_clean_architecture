import { IRepository } from '@domain/basic/irepository';
import People from 'src/@core/domain/people/people';

export interface IPeopleRepository extends IRepository<People> {
  getByDocument(document: string, id_company: number): Promise<People>;
}
