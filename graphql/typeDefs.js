const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    getDogs: [Dog]
  }
  type Dog {
    id: ID!
    name: String!
    createdAt: String!
  }
  input CreateDog {
    name: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    level: String
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Mutation {
    createDog(createDog: CreateDog): Dog!
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
