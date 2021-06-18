const dogsResolvers = require("./dogs");

module.exports = {
  Query: {
    ...dogsResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
  },
};
