import Emails from '../../../../domain/emails/emails';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const EmailsSchema = new EntitySchema<Emails>({
  name: 'emails',
  target: Emails,
  tableName: 'emails',
  columns: {
    ...BasicCollumnsSchema,
    email: {
      type: 'varchar',
      length: 200,
    },
  },
  relations: {
    person: {
      target: 'people',
      type: 'many-to-one',
      inverseSide: 'emails',
      joinColumn: {
        name: 'id_person',
      },
    },
  },
});
