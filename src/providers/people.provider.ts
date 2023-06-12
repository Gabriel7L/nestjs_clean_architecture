import Addresses from '@domain/addresses/addresses';
import People from '@domain/people/people';
import { IPeopleRepository } from '@domain/people/repositories/ipeople.repository';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreatePerson from '@use-cases/people/create-person';
import GetPeople from '@use-cases/people/get-people';
import GetPersonByDocument from '@use-cases/people/get-person-by-document';
import GetPerson from '@use-cases/people/get-person-by-id';
import { AddressesTypeOrmRepository } from 'src/@core/db/repositories/typeorm/addresses/addresses-typeorm.repository';
import { PeopleTypeOrmRepository } from 'src/@core/db/repositories/typeorm/people/people-typeorm.repository';
import { DataSource } from 'typeorm';

export const peopleProvider: Provider[] = [
  {
    provide: PeopleTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new PeopleTypeOrmRepository(dataSource.getRepository(People));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: AddressesTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new AddressesTypeOrmRepository(
        dataSource.getRepository(Addresses),
      );
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: GetPerson,
    useFactory: (repoPeople: IPeopleRepository) => {
      return new GetPerson(repoPeople);
    },
    inject: [PeopleTypeOrmRepository],
  },
  {
    provide: GetPeople,
    useFactory: (repoPeople: IPeopleRepository) => {
      return new GetPeople(repoPeople);
    },
    inject: [PeopleTypeOrmRepository],
  },
  {
    provide: GetPersonByDocument,
    useFactory: (repoPeople: IPeopleRepository) => {
      return new GetPersonByDocument(repoPeople);
    },
    inject: [PeopleTypeOrmRepository],
  },
  {
    provide: CreatePerson,
    useFactory: (repoPeople: IPeopleRepository) => {
      return new CreatePerson(repoPeople);
    },
    inject: [PeopleTypeOrmRepository],
  },
];
