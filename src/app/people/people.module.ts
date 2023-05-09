import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import CreatePerson from 'src/@core/use-cases/people/create-person';
import GetPerson from 'src/@core/use-cases/people/get-person-by-id';
import { IAddressesRepository } from 'src/@core/domain/addresses/iaddresses.repository';
import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';
import { PeopleTypeOrmRepository } from 'src/@core/db/repositories/typeorm/people/people-typeorm.repository';
import { AddressesTypeOrmRepository } from 'src/@core/db/repositories/typeorm/addresses/addresses-typeorm.repository';
import dataSource from 'src/@core/db/conn/data-source';
import { DataSource } from 'typeorm';
import People from 'src/@core/domain/people/people';
import Addresses from 'src/@core/domain/addresses/addresses';
import { getDataSourceToken } from '@nestjs/typeorm';
import GetPeople from 'src/@core/use-cases/people/get-people';

@Module({
  controllers: [PeopleController],
  providers: [
    PeopleService,
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
      provide: CreatePerson,
      useFactory: (
        repoPeople: IPeopleRepository,
        repoAddress: IAddressesRepository,
      ) => {
        return new CreatePerson(repoPeople, repoAddress);
      },
      inject: [PeopleTypeOrmRepository, AddressesTypeOrmRepository],
    },
  ],
})
export class PeopleModule {}
