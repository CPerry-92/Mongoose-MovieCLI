const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  genre: {
    type: String,
  },
  seasons: {
    type: String,
  },
});

const Show = mongoose.model("Shows", showsSchema);

module.exports = Show;
