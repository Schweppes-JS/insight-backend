import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  database: process.env.PGUSER,
  entities: [__dirname + "/**/*.entity.{js,ts}"],
  migrations: [__dirname + "/migrations/**/*.{js,ts}"],
};

const appDataSource = new DataSource(dataSourceOptions);

appDataSource.initialize();

export default appDataSource;
