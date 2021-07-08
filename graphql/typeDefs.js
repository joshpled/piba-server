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
  type Employee {
    id: ID!
    name: String!
    position: String!
    email: String!
    phone: String!
    permissions: String!
    photo: String!
  }
  input EmployeeInput {
    name: String!
    position: String!
    email: String!
    phone: String!
    permissions: String!
    photo: String!
  }
  input UpdateEmployee {
    id: ID!
    name: String!
    position: String!
    email: String!
    phone: String!
    permissions: String!
    photo: String!
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
    getEmployees: [Employee]
    getEmployee(employeeId: ID!): Employee
  }
  type Mutation {
    createDog(newDog: DogInput): Dog!
    updateDog(updateDog: UpdateDog): Dog
    deleteDog(dogId: ID!): DeleteResponse!
    createVolunteer(newVolunteer: VolunteerInput): Volunteer!
    updateVolunteer(updateVolunteer: UpdateVolunteer): Volunteer
    deleteVolunteer(volunteerId: ID!): DeleteResponse!
    createEmployee(newEmployee: EmployeeInput): Employee!
    updateEmployee(updateEmployee: UpdateEmployee): Employee
    deleteEmployee(employeeId: ID!): DeleteResponse!
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
