import Orders from '@domain/orders/orders';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderSchema = new EntitySchema<Orders>({
  name: 'orders',
  tableName: 'orders',
  target: Orders,
  columns: {
    ...BasicCollumnsSchema,
    total_value: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    description: {
      type: 'text',
    },
    discount: {
      type: 'decimal',
      scale: 2,
      precision: 2,
      nullable: true,
    },
    status: {
      type: 'varchar',
      length: 70,
      nullable: false,
    },
  },
  relations: {
    orderProducts: {
      type: 'one-to-many',
      target: 'order_products',
      eager: true,
    },
    orderServices: {
      type: 'one-to-many',
      target: 'order_services',
      eager: true,
    },
    id_client: {
      type: 'many-to-one',
      target: 'people',
      eager: true,
      joinColumn: {
        name: 'id_client',
      },
    },
  },
});
