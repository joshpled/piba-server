const { model, Schema } = require("mongoose");

const workflowSchema = new Schema({
  steps: [stepschema],
  createdAt: String,
});

module.exports = model("Workflow", workflowSchema);
