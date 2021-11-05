const mongoose = require("mongoose");
const yargs = require("yargs");
const Show = require("./tv.model");

// Add Command: node src/app.js "add" --title="Tenet" --genre="Action" --director="Christopher Nolan"
const addShow = async (showObj) => {
  try {
    const newShow = new Show(showObj);
    await newShow.save();
    mongoose.disconnect();
    console.log("Tv Show added to database!");
  } catch (error) {
    console.log(error);
  }
};

// Delete Command: node src/app.js "delete" --title="Tenet"
const deleteShow = async () => {
  try {
    await Show.deleteOne({ title: yargs.argv.title });
    mongoose.disconnect();
    console.log("Specified Tv Show deleted from the database!");
  } catch (error) {
    console.log(error);
  }
};
// Update Command: node src/app.js "update" --title="Spiderman" --genre="Comedy"
const updateShow = async () => {
  try {
    const changedShow = { title: yargs.argv.title };
    await Show.findOneAndUpdate(changedShow, { genre: yargs.argv.genre });
    mongoose.disconnect();
    console.log("Genre of specified Tv Show updated!");
  } catch (error) {
    console.log(error);
  }
};

// List Command: node src/app.js "list movie"
const listShow = async () => {
  try {
    const listTVResults = await Show.find({});
    console.log(listTVResults);
    mongoose.disconnect();
    console.log("All Tv Shows listed above");
  } catch (error) {
    console.log(error);
  }
};

const searchShow = async () => {
  try {
    const searchTVResults = await Show.find({ genre: yargs.argv.genre });
    console.log(searchTVResults);
    mongoose.disconnect();
    console.log("All Tv Shows of the specified Genre listed above");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addShow, deleteShow, updateShow, listShow, searchShow };
