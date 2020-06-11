import express from "express";
import compression from "compression";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { ImageAPI } from "./images/ImageAPI";
import { resolvers } from "./resolvers";

const { PORT = 4000 } = process.env;

const app = express();
app.use(cors());
app.use(compression());

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  dataSources: () => ({
    imageAPI: new ImageAPI(),
  }),
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
