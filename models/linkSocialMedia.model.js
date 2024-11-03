//the model folder is responsible for defining the data structures and interactions with the database.
const mongoose = require("mongoose"); // use to create model
const SocialMediaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter link name!"],
    },
    link: {
      type: String,
      // required: [true, "Please enter link name!"],
    },
    type: {
      type: String,
      // required: [true, "Please enter link name!"],
    },
    focus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

module.exports = SocialMedia;
