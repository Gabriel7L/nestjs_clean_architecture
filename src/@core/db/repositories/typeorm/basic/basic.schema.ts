import { EntitySchemaColumnOptions } from 'typeorm';

export const BasicCollumnsSchema = {
  id: {
    type: 'int',
    primary: true,
    generated: true,
  } as EntitySchemaColumnOptions,

  created_at: {
    type: 'timestamp',
    createDate: true,
    select: false,
  } as EntitySchemaColumnOptions,
  updated_at: {
    type: 'timestamp',
    updateDate: true,
    select: false,
  } as EntitySchemaColumnOptions,
};
