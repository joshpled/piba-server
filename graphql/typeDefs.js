const { gql } = require("apollo-server");

module.exports = gql`
  type Volunteer {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    phone: String!
    address: String!
    addressTwo: String!
    zipcode: Int!
    city: String!
    state: String!
    sign: Boolean!
  }
  input VolunteerInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    phone: String!
    address: String!
    addressTwo: String!
    zipcode: Int!
    city: String!
    state: String!
    sign: Boolean!
  }
  input UpdateVolunteer {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    phone: String!
    address: String!
    addressTwo: String!
    zipcode: Int!
    city: String!
    state: String!
    sign: Boolean!
  }
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
  input UpdateDog {
    id: ID!
    name: String
    age: Int
    inFoster: Boolean
  }
  type DeleteResponse {
    success: Boolean!
    message: String
  }
  type Query {
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
    getVolunteers: [Volunteer]
    getVolunteer(volunteerId: ID!): Volunteer
  }
  type Mutation {
    createDog(newDog: DogInput): Dog!
    createVolunteer(newVolunteer: VolunteerInput): Volunteer!
    updateDog(updateDog: UpdateDog): Dog
    updateVolunteer(updateVolunteer: UpdateVolunteer): Volunteer
    deleteDog(dogId: ID!): DeleteResponse!
    deleteVolunteer(volunteerId: ID!): DeleteResponse!
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
