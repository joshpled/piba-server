const { gql } = require("apollo-server");

module.exports = gql`
  type Dog {
    id: ID!
    name: String!
    age: Int!
    inFoster: Boolean!
    createdAt: String!
  }
  input DogInput {
    name: String!
    age: Int!
    inFoster: Boolean!
  }
  type DogDeleteResponse {
    success: Boolean!
    message: String
  }
  type Query {
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
  }
  type Mutation {
    createDog(newDog: DogInput): Dog!
    deleteDog(dogId: ID!): DogDeleteResponse!
  }
`;

/*
mutation{
  createDog(newDog:{
    name: "hello"
    age: 21
    inFoster: true
  } ){
    name
  }
}


mutation{
  deleteDog(dogId: "60cc073fc2cd909c41ddf4ee"){
    name
  }
}
*/
