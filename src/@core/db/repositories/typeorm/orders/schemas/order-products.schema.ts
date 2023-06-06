import OrderProducts from '@domain/orders/order-products';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const OrderProductsSchema = new EntitySchema<OrderProducts>({
  name: 'order_products',
  tableName: 'order_products',
  target: OrderProducts,
  columns: {
    ...BasicCollumnsSchema,
    discount: {
      type: 'decimal',
      scale: 2,
      precision: 2,
      nullable: true,
    },
    quantity: {
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
    id_product: {
      type: 'many-to-one',
      target: 'products',
      nullable: false,
      joinColumn: {
        name: 'id_product',
      },
    },
  },
});
