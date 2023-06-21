import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'clean_arc',
  port: 5432,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ['dist/**/*.schema.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
