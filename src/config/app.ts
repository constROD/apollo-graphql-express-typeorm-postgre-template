import dotenv from "dotenv";
dotenv.config();

/* APP */
export const APP_PORT = process.env.APP_PORT;
export const APP_ZONE = process.env.APP_ZONE;

/* DB */
export const DB_TYPE = process.env.DB_TYPE;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const DB_SCHEMA = process.env.APP_ZONE;

/* ORM */
export const ORM_NAME = process.env.ORM_NAME;
export const ORM_SYNCHRONIZE = process.env.ZONE === "production" ? false : true;
