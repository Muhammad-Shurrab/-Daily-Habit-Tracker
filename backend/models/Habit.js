const mongoose = require("mongoose");

const habitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  categories: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   finishedAt: { type: Date, default: Date.apply },
});

module.exports = mongoose.model("Habit", habitSchema);
