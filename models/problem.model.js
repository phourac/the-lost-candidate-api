//the model folder is responsible for defining the data structures and interactions with the database.
const mongoose = require("mongoose"); // use to create model
const ProblemSchema = mongoose.Schema(
  {
    problem: {
      type: String,
      required: [true, "Please enter link name!"],
    },
    solution: {
      type: [String], // specify an array of strings
      required: [true, "Please provide at least one answer!"],
    },
    example: {
      type: [String], // specify an array of strings
      required: [true, "Please provide at least one answer!"],
    },
  },
  {
    timestamps: true,
  }
);

const Problem = mongoose.model("Problem", ProblemSchema);

module.exports = Problem;
