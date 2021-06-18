const { AuthenticationError, UserInputError } = require("apollo-server");

const Dog = require("../../models/Dog");

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
          throw new Error("Dog not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createDog(_, { newDog: { name, age, inFoster } }) {
      if (name.trim() === "") {
        throw new Error("Dog name must not be empty");
      }

      const newDog = new Dog({
        name,
        age,
        inFoster,
        createdAt: new Date().toISOString(),
      });

      const dog = await newDog.save();

      return dog;
    },
    async deleteDog(_, { dogId }) {
      try {
        const dog = await Dog.findById(dogId);
        await dog.delete();
        return "Dog deleted successfully";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
