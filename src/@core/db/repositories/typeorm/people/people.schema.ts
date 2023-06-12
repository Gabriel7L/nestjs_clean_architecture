import People from 'src/@core/domain/people/people';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const PeopleSchema = new EntitySchema<People>({
  name: 'people',
  target: People,
  tableName: 'people',
  columns: {
    ...BasicCollumnsSchema,
    document: {
      type: 'varchar',
      length: 50,
    },
    dt_birth: {
      type: 'timestamp',
    },
    person_type: {
      type: 'varchar',
      length: 2,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    id_company: {
      type: 'int',
      select: false,
      nullable: false,
    },
  },
  relations: {
    addresses: {
      target: 'addresses',
      type: 'one-to-many',
      inverseSide: 'person',
      eager: true,
      cascade: ['insert', 'update'],
    },
    emails: {
      target: 'emails',
      type: 'one-to-many',
      inverseSide: 'person',
      eager: true,
      cascade: ['insert', 'update'],
    },
    company: {
      target: 'companies',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_company',
      },
    },
  },
});
