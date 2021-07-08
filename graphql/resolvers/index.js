const dogsResolvers = require("./dogs");
const volunteerResolvers = require("./volunteers");
const employeeResolvers = require("./employees");

module.exports = {
  Query: {
    ...dogsResolvers.Query,
    ...volunteerResolvers.Query,
    ...employeeResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
    ...volunteerResolvers.Mutation,
    ...employeeResolvers.Mutation,
  },
};
