import { Schema, model, models } from "mongoose";

const pagesSchema = new Schema({
  pageName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  links: {
    type: Array,
    required: true,
  },
  avatars: {
    type: Number,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  opacity: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  brightness: {
    type: Number,
    required: true,
  },
  colorList: {
    type: Array,
    required: true,
  },
  gradient: {
    type: Boolean,
    required: true,
  },
});

const Pages = models.Pages || model("Pages", pagesSchema);

export default Pages;
