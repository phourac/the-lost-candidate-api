//the model folder is responsible for defining the data structures and interactions with the database.
const mongoose = require("mongoose"); // use to create model
const InteviewSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please enter link name!"],
    },
    answer: {
      type: [String], // specify an array of strings
      required: [true, "Please provide at least one answer!"],
    },
  },
  {
    timestamps: true,
  }
);

const Inteview = mongoose.model("Inteview", InteviewSchema);

module.exports = Inteview;
