// const User =
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      minength: 3,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
