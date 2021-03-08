const Dog = require("../../models/Dog");

module.exports = {
  Query: {
    async getDogs() {
      try {
        const dogs = await Dog.find();
        return dogs;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createDog(
      _,
      { name },
      context
    ) {
      const newDog = new Dog({
        name,
        createdAt: new Date().toISOString(),
      });
      const dog = await newDog.save();
      return dog;
    },
  },
};
