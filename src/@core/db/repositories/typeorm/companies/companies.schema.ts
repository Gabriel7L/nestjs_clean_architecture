import Companies from '@domain/companies/companies';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const CompaniesSchema = new EntitySchema<Companies>({
  name: 'companies',
  target: Companies,
  tableName: 'companies',
  columns: {
    ...BasicCollumnsSchema,
    fantasy_name: {
      type: 'varchar',
      length: 255,
    },
    social_name: {
      type: 'varchar',
      length: 255,
    },
    document: {
      type: 'varchar',
      length: 90,
    },
  },
});
