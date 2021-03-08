const usersResolvers = require('./users');
const dogResolvers = require('./dogs')

module.exports = {
  Query: {
    ...dogResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...dogResolvers.Mutation
  },
};
