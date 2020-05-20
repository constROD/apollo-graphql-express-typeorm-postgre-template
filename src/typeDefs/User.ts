import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
  }
  type Action {
    success: Boolean!
  }
  input UserInput {
    firstName: String!
    lastName: String!
    age: Int!
  }
  extend type Query {
    getUsers: [User]!
    getUser(id: ID!): User
  }
  extend type Mutation {
    addUser(input: UserInput!): Action
    updateUser(id: Int!, input: UserInput!): Action
    deleteUser(id: Int!): Action
  }
`;
