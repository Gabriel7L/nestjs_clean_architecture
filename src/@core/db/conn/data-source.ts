import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'clean_arc',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  entities: ['dist/**/*.schema.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
