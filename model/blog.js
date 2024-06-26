const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      reuired: true,
    },
    coverImage: {
      type: String,
      required: false,
    },
    createBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Blog = model("blog", blogSchema);

module.exports = Blog;
