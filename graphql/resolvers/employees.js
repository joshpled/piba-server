const Employee = require("../../models/Employee");
const DeleteResponse = require("../../models/DeleteResponse");

module.exports = {
  Query: {
    async getEmployees() {
      try {
        const employees = await Employee.find().sort({ createdAt: -1 });
        return employees;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getEmployee(_, args) {
      try {
        const employee = await Employee.find({ email: args.emailId }).exec();
        if (employee) {
          return employee[0];
        } else {
          throw new Error("Employee not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createEmployee(_, { newEmployee: { name, position, email, phone, permissions, photo } }) {
      if (name.trim() === "") {
        throw new Error("Employee name must not be empty");
      }
      try {
        const newEmployee = new Employee({
          name,
          position,
          email,
          phone,
          permissions,
          photo,
          createdAt: new Date().toISOString(),
        });

        const employee = await newEmployee.save();

        return employee;
      } catch (error) {
        return error;
      }
    },

    async updateEmployee(_, { updateEmployee: { id, name, position, email, phone, permissions, photo } }) {
      if (name.trim() === "") {
        throw new Error("Employee name must not be empty");
      }

      let newEmployee = await Employee.findById(id);

      let employee = await newEmployee.updateOne({ name, position, email, phone, permissions, photo });
      if (employee) {
        let result = await Employee.findById(id);
        return result;
      }
    },

    async deleteEmployee(_, { employeeId }) {
      try {
        const employee = await Employee.findById(employeeId);
        await employee.delete();
        let response = new DeleteResponse({ success: true, message: `Employee (id: ${employeeId}) has been deleted successfully` });
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
