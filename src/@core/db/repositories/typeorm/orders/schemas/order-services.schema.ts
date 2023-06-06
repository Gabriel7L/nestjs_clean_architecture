import OrderServices from '@domain/orders/order-services';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderServicesSchema = new EntitySchema<OrderServices>({
  name: 'order_services',
  tableName: 'order_services',
  target: OrderServices,
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
    id_service: {
      type: 'int',
      nullable: false,
    },
  },
  relations: {
    id_order: {
      type: 'many-to-one',
      target: 'orders',
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'id_order',
      },
    },
    id_service: {
      type: 'many-to-one',
      target: 'services',
      nullable: false,
      joinColumn: {
        name: 'id_service',
      },
    },
  },
});
