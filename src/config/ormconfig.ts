import path from "path";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA,
  DB_TYPE,
  DB_USERNAME,
  ORM_NAME,
  ORM_SYNCHRONIZE,
} from "./app";

export const ORM_CONFIG: any = {
  name: ORM_NAME,
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  schema: DB_SCHEMA,
  synchronize: ORM_SYNCHRONIZE,
  logging: false,
  entities: [path.join(__dirname, "../entity/*.*")],
};
