import OrderServices from '@domain/orders/order-services';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderServicesSchema = new EntitySchema<OrderServices>({
  name: 'order_services',
  tableName: 'order_services',
  columns: {
    ...BasicCollumnsSchema,
    price: {
      type: 'decimal',
      scale: 2,
      precision: 10,
      nullable: false,
    },
    discount: {
      type: 'decimal',
      scale: 2,
      precision: 2,
      nullable: true,
    },
    service_name: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    id_service: {
      type: 'int',
      nullable: false,
    },
    id_order: {
      type: 'int',
      nullable: false,
    },
  },
  relations: {
    order: {
      type: 'many-to-one',
      target: 'orders',
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'id_order',
      },
    },
  },
});
