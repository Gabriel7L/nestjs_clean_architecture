import OrderProducts from '@domain/orders/order-products';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderProductsSchema = new EntitySchema<OrderProducts>({
  name: 'order_products',
  tableName: 'order_products',
  columns: {
    ...BasicCollumnsSchema,
    discount: {
      type: 'decimal',
      scale: 2,
      precision: 2,
    },
    id_product: {
      type: 'int',
      nullable: false,
    },
    product: {
      type: 'varchar',
      length: 255,
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
