const { AuthenticationError, UserInputError } = require('apollo-server');

const Dog = require('../../models/Dog');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getDogs() {
      try {
        const dogs = await Dog.find().sort({ createdAt: -1 });
        return dogs;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getDog(_, { dogId }) {
      try {
        const dog = await Dog.findById(dogId);
        if (dog) {
          return dog;
        } else {
          throw new Error('Dog not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createDog(_, {newDog: {name, age, inFoster}}, context) {
      const user = checkAuth(context);

      if (name.trim() === '') {
        throw new Error('Dog name must not be empty');
      }

      const newDog = new Dog({
        name,
        age,
        inFoster,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      });

      const dog = await newDog.save();

      context.pubsub.publish('NEW_DOG', {
        newDog: dog
      });

      return dog;
    },
    async deleteDog(_, { dogId }, context) {
      const user = checkAuth(context);

      try {
        const dog = await Dog.findById(dogId);
        if (user.username === dog.username) {
          await dog.delete();
          return 'Dog deleted successfully';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Subscription: {
    newDog: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_DOG')
    }
  }
};
