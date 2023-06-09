import Employees from '@domain/employees/employees';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../../basic/basic.schema';

export const EmployeesSchema = new EntitySchema<Employees>({
  name: 'employees',
  tableName: 'employees',
  target: Employees,
  columns: {
    ...BasicCollumnsSchema,
    dt_hiring: {
      type: 'date',
      nullable: true,
    },
    fiscal_wage: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
    real_wage: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
    position: {
      type: 'varchar',
      length: 100,
    },
    workload: {
      type: 'time',
      nullable: true,
    },
    id_person: {
      type: 'integer',
    },
  },
  relations: {
    id_person: {
      type: 'one-to-one',
      target: 'people',
      joinColumn: {
        name: 'id_person',
      },
      eager: true,
    },
  },
});
