// const User =
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    minlength: 20,
    trim: true,
  },
  postedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  private: Boolean,
});

module.exports = mongoose.model("Post", postSchema);
