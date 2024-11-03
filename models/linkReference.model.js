//the model folder is responsible for defining the data structures and interactions with the database.
const mongoose = require("mongoose"); // use to create model
const ReferenceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter link name!"],
    },
    website: {
      type: String,
      // required: [true, "Please enter link name!"],
    },
    app_store: {
      type: String,
      // required: [true, "Please enter link name!"],
    },
    play_store: {
      type: String,
    },
    focus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Reference = mongoose.model("Reference", ReferenceSchema);

module.exports = Reference;
