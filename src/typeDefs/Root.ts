import { gql } from "apollo-server-express";

export default gql`
  type Query {
    parent: String
  }
  type Mutation {
    parent: String
  }
  type Subscription {
    parent: String
  }
`;
