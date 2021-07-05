const dogsResolvers = require("./dogs");
const volunteerResolvers = require("./volunteers");

module.exports = {
  Query: {
    ...dogsResolvers.Query,
    ...volunteerResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
    ...volunteerResolvers.Mutation,
  },
};
