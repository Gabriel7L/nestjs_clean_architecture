import Addresses from 'src/@core/domain/addresses/addresses';
import { EntitySchema } from 'typeorm';
import { BasicCollumnsSchema } from '../basic/basic.schema';

export const AddressesSchema = new EntitySchema<Addresses>({
  name: 'addresses',
  tableName: 'addresses',
  target: Addresses,
  columns: {
    ...BasicCollumnsSchema,
    city: {
      type: String,
      length: 150,
    },
    district: {
      type: String,
      length: 150,
    },
    id_person: {
      type: 'int',
      nullable: false,
      select: false,
    },
    complement: {
      type: 'text',
      nullable: true,
    },
    state: {
      type: String,
      length: 15,
    },
    street: {
      type: String,
      length: 250,
    },
    zip_code: {
      type: String,
      length: 40,
    },
    number: {
      type: String,
      length: 50,
    },
  },
  relations: {
    person: {
      type: 'many-to-one',
      target: 'people',
      joinColumn: {
        name: 'id_person',
      },
      inverseSide: 'addresses',
    },
  },
});
