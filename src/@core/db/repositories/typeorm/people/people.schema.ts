import People from 'src/@core/domain/people/people';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';
const DateTransformer = {
  to: (value: string) => value,
  from: (value: Date) => {
    if (!value) {
      return value;
    }
    const [year, month, day] = value.toISOString().split('-');
    return `${day.substring(0, 2)}/${month}/${year}`;
  },
};
export const PeopleSchema = new EntitySchema<People>({
  name: 'people',
  target: People,
  tableName: 'people',
  columns: {
    ...BasicCollumnsSchema,
    document: {
      type: 'varchar',
      length: 50,
    },
    dt_birth: {
      type: 'timestamp',
      transformer: DateTransformer,
    },
    person_type: {
      type: 'varchar',
      length: 2,
    },
    is_supplier: {
      type: 'boolean',
      default: false,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    id_company: {
      type: 'int',
      select: false,
      nullable: false,
    },
  },
  relations: {
    addresses: {
      target: 'addresses',
      type: 'one-to-many',
      inverseSide: 'person',
      eager: true,
      cascade: ['insert', 'update'],
    },
    emails: {
      target: 'emails',
      type: 'one-to-many',
      inverseSide: 'person',
      eager: true,
      cascade: ['insert', 'update'],
    },
    company: {
      target: 'companies',
      type: 'many-to-one',
      joinColumn: {
        name: 'id_company',
      },
    },
  },
});
