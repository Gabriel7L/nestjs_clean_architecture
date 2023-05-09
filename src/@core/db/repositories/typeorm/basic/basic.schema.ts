import { EntitySchemaColumnOptions } from 'typeorm';

export const BasicCollumnsSchema = {
  id: {
    type: 'uuid',
    primary: true,
  } as EntitySchemaColumnOptions,

  created_at: {
    type: 'timestamp',
    createDate: true,
  } as EntitySchemaColumnOptions,
  updated_at: {
    type: 'timestamp',
    updateDate: true,
  } as EntitySchemaColumnOptions,
};
