import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "insight",
  password: "asd761326",
  database: "insight",
  entities: [__dirname + "/**/*.entity.{js,ts}"],
  migrations: [__dirname + "/migrations/**/*.{js,ts}"],
};

const appDataSource = new DataSource(dataSourceOptions);

appDataSource.initialize();

export default appDataSource;
