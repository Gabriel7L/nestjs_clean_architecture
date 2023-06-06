import Products from '@domain/products/products';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const ProductsSchema = new EntitySchema<Products>({
  name: 'products',
  tableName: 'products',
  columns: {
    ...BasicCollumnsSchema,
    active: {
      type: 'boolean',
    },
    code: {
      type: 'varchar',
      length: 255,
    },
    control_stock: {
      type: 'boolean',
    },
    current: {
      type: 'int',
      default: 0,
    },
    floating: {
      type: 'int',
      default: 0,
    },
    dt_purchase: {
      type: 'date',
      default: 'now()',
    },
    height: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    length: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    max_discount_percent: {
      type: 'decimal',
      scale: 2,
      precision: 2,
    },
    maximum: {
      type: 'int',
      default: 0,
    },
    minimum: {
      type: 'int',
      default: 0,
    },
    price_purchase: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    price_selling: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    product: {
      type: 'varchar',
      length: 255,
    },
    width: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    profit_percent: {
      type: 'decimal',
      scale: 2,
      precision: 10,
    },
    id_category: {
      type: 'int',
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
