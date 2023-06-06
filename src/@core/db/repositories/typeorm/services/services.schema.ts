import Services from '@domain/services/services';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const ServicesSchema = new EntitySchema<Services>({
  name: 'services',
  target: Services,
  tableName: 'services',
  columns: {
    ...BasicCollumnsSchema,
    max_discount: {
      type: 'decimal',
      scale: 2,
      precision: 2,
    },
    price: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    service: {
      type: 'varchar',
      length: 255,
    },
  },
  relations: {
    id_company: {
      type: 'many-to-one',
      target: 'companies',
      joinColumn: {
        name: 'id_company',
      },
    },
  },
});
