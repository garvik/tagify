import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Image {
    id: ID!
    url: String!
    tags: [Tag]
  }

  type Tag {
    name: String!
  }

  type Query {
    images: [Image]
    tags: [Tag]
    hello: String
  }
`;
