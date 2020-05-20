import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { APP_PORT, APP_ZONE } from "./config/app";
import { ORM_CONFIG } from "./config/ormconfig";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();

app.use(cors());
app.use(compression());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }: any) => ({ req, res }),
  playground: true,
});

server.applyMiddleware({ app });

if (APP_ZONE === "production") {
  const ssl = {
    key: fs.readFileSync("SSL KEY PATH"),
    cert: fs.readFileSync("SSL CERT PATH"),
    ca: fs.readFileSync("SSL CA PATH"),
  };

  https.createServer(ssl, app).listen({ port: APP_PORT }, async () => {
    await createConnection(ORM_CONFIG);

    console.log(
      `Server started on: http://localhost:${APP_PORT}${server.graphqlPath}`
    );
  });
} else {
  app.listen({ port: APP_PORT }, async () => {
    await createConnection(ORM_CONFIG);

    console.log(
      `Server started on: http://localhost:${APP_PORT}${server.graphqlPath}`
    );
  });
}
