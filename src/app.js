require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  deleteMovie,
  updateMovie,
  listMovie,
  searchMovie,
} = require("./movie/movie.methods");
const {
  addShow,
  deleteShow,
  updateShow,
  listShow,
  searchShow,
} = require("./tv/tv.methods");
const Movie = require("./movie/movie.model");
const Show = require("./tv/tv.model");

const app = () => {
  if (process.argv[2] === "add movie") {
    addMovie({
      title: yargs.argv.title,
      genre: yargs.argv.genre,
      director: yargs.argv.director,
    });
  } else if (process.argv[2] === "delete movie") {
    deleteMovie();
  } else if (process.argv[2] === "update movie") {
    updateMovie();
  } else if (process.argv[2] === "list movies") {
    listMovie();
  } else if (process.argv[2] === "search movies") {
    searchMovie();
  } else if (process.argv[2] === "add show") {
    addShow({
      title: yargs.argv.title,
      genre: yargs.argv.genre,
      seasons: yargs.argv.seasons,
    });
  } else if (process.argv[2] === "delete show") {
    deleteShow();
  } else if (process.argv[2] === "update show") {
    updateShow();
  } else if (process.argv[2] === "list shows") {
    listShow();
  } else if (process.argv[2] === "search shows") {
    searchShow();
  } else {
    console.log(
      'Inavild Command - Try: "add (movie/show)", "delete (movie/show)", "update (movie/show)", "list (movie/show)" or "search (movie/show)"'
    );
  }
};

app();
