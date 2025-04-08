import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    nom: String!
    prenom: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(nom: String!, prenom: String!, email: String!): User!
    updateUser(id: ID!, nom: String, prenom: String, email: String): User
    deleteUser(id: ID!): String
  }
`;
