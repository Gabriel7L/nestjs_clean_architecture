import Budget from 'src/@core/domain/budget/budget';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const BudgetSchema = new EntitySchema<Budget>({
  target: Budget,
  name: 'budget',
  tableName: 'budget',
  columns: {
    ...BasicCollumnsSchema,
    description: {
      type: 'text',
      nullable: false,
    },
    id_client: {
      type: 'uuid',
      nullable: false,
    },
    value: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
  },
  relations: {
    client: {
      target: 'people',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_client',
      },
    },
  },
});
