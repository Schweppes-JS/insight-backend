import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname + "/**/*.entity.{js,ts}"],
  migrations: [__dirname + "/migrations/**/*.{js,ts}"],
};

const appDataSource = new DataSource(dataSourceOptions);

appDataSource.initialize();

export default appDataSource;
