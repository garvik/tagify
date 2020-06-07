import express from "express";
import compression from "compression";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";

const { PORT = 8080 } = process.env;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const app = express();
app.use(cors());
app.use(compression());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
