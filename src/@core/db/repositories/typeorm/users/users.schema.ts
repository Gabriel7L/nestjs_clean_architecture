import Users from '@domain/users/users';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const UsersSchema = new EntitySchema<Users>({
  name: 'users',
  target: Users,
  tableName: 'users',
  columns: {
    ...BasicCollumnsSchema,
    email: {
      type: 'varchar',
      length: 255,
    },
    password: {
      type: 'varchar',
      length: 255,
    },
    id_companie: {
      type: 'int',
      nullable: false,
    },
    id_person: {
      type: 'int',
      nullable: false,
    },
  },
  relations: {
    person: {
      target: 'people',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_person',
      },
    },
    companie: {
      target: 'companies',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_companie',
      },
    },
  },
});
