const Volunteer = require("../../models/Volunteer");
const DeleteResponse = require("../../models/DeleteResponse");

module.exports = {
  Query: {
    async getVolunteers() {
      try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        return volunteers;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getVolunteer(_, { volunteerId }) {
      try {
        const volunteer = await Volunteer.findById(volunteerId);
        if (volunteer) {
          return volunteer;
        } else {
          throw new Error("Volunteer not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createVolunteer(_, { newVolunteer: { firstName, lastName, age, email, phone, address, addressTwo, zipcode, city, state, sign } }) {
      if (firstName.trim() === "" && lastName.trim() === "") {
        throw new Error("Volunteer name must not be empty");
      }

      const newVolunteer = new Volunteer({
        firstName,
        lastName,
        age,
        email,
        phone,
        address,
        addressTwo,
        zipcode,
        city,
        state,
        sign,
        createdAt: new Date().toISOString(),
      });

      const volunteer = await newVolunteer.save();

      return volunteer;
    },

    async updateVolunteer(_, { updateVolunteer: { id, firstName, lastName, age, email, phone, address, addressTwo, zipcode, city, state, sign } }) {
      if (firstName.trim() === "" && lastName.trim() === "") {
        throw new Error("Volunteer name must not be empty");
      }

      let newVolunteer = await Volunteer.findById(id);

      let volunteer = await newVolunteer.updateOne({ firstName, lastName, age, email, phone, address, addressTwo, zipcode, city, state, sign });
      if (volunteer) {
        let result = await Volunteer.findById(id);
        return result;
      }
    },

    async deleteVolunteer(_, { volunteerId }) {
      try {
        const volunteer = await Volunteer.findById(volunteerId);
        await volunteer.delete();
        let response = new DeleteResponse({ success: true, message: `Volunteer (id: ${volunteerId}) has been deleted successfully` });
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
