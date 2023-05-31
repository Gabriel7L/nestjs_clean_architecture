import Orders from '@domain/orders/orders';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderSchema = new EntitySchema<Orders>({
  name: 'orders',
  tableName: 'orders',
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
    id_client: {
      type: 'integer',
      nullable: false,
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
      joinColumn: {
        name: 'id_order',
      },
    },
    orderServices: {
      type: 'one-to-many',
      target: 'order_services',
      eager: true,
      joinColumn: {
        name: 'id_order',
      },
    },
    client: {
      type: 'many-to-one',
      target: 'people',
      eager: true,
      joinColumn: {
        name: 'id_client',
      },
    },
  },
});
