import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  Creator: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  File: {
    type: String,
    // required: true,
  },
  Date: {
    type: Date,
    default: new Date().toDateString(),
  },
  UserId: {
    type: String,
    required: true,
  },
  Views: {
    type: Number,
    default: 0,
  },
});

const BlogModel = mongoose.model("BlogData", BlogSchema);

export default BlogModel;
