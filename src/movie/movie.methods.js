const mongoose = require("mongoose");
const yargs = require("yargs");
const Movie = require("./movie.model");

// Add Command: node src/app.js "add" --title="Tenet" --genre="Action" --director="Christopher Nolan"
const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    mongoose.disconnect();
    console.log("Movie added to database!");
  } catch (error) {
    console.log(error);
  }
};

// Delete Command: node src/app.js "delete" --title="Tenet"
const deleteMovie = async () => {
  try {
    await Movie.deleteOne({ title: yargs.argv.title });
    mongoose.disconnect();
    console.log("Specified Movie deleted from the database!");
  } catch (error) {
    console.log(error);
  }
};
// Update Command: node src/app.js "update" --title="Spiderman" --genre="Comedy"
const updateMovie = async () => {
  try {
    const changedMovie = { title: yargs.argv.title };
    await Movie.findOneAndUpdate(changedMovie, { genre: yargs.argv.genre });
    mongoose.disconnect();
    console.log("Genre of specified Movie updated!");
  } catch (error) {
    console.log(error);
  }
};

// List Command: node src/app.js "list"
const listMovie = async () => {
  try {
    const listResults = await Movie.find({});
    console.log(listResults);
    mongoose.disconnect();
    console.log("All Movies listed above");
  } catch (error) {
    console.log(error);
  }
};

const searchMovie = async () => {
  try {
    const searchResults = await Movie.find({ genre: yargs.argv.genre });
    console.log(searchResults);
    mongoose.disconnect();
    console.log("All Movies of the specified Genre listed above");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, deleteMovie, updateMovie, listMovie, searchMovie };
