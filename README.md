# Mongoose-MovieCLI

APPLICATION USER GUIDE:

- Ensure to call: -[node (relevant file path)/app.js]- before desired command.

* All commands relevant for both Movies and TV Shows.

- For Movies: "command movie(s)"
  EXAMPLE: ["add movie" --title="MOVIE TITLE" --genre="MOVIE GENRE" --director="MOVIE DIRECTOR"]

- For TV Shows: "command show(s)"
  EXAMPLE:["add show" --title="TV SHOW TITLE" --genre="TV SHOW GENRE" --seasons="NUMBER OF SEASONS"]

ADD A MOVIE / TV SHOW:

["add movie(show)" --title="MOVIE/SHOW TITLE" --genre="MOVIE/SHOW GENRE" --director="MOVIE DIRECTOR"]

- For TV Shows change "--director" to "--seasons"

DELETE A MOVIE / TV SHOW:

["delete movie(show)" --title="MOVIE/SHOW TITLE"]

UPDATE THE GENRE OF A MOVIE / TV SHOW:

["update movie(show)" --title="MOVIE/SHOW TITLE" --genre="UPDATED GENRE"]

LIST ALL MOVIE's / TV SHOW's:

["list movies(shows)"]

SEARCH MOVIE's / TV SHOW's BY GENRE:

["search movies(shows)" --genre="DESIRED GENRE (ACTION, DRAMA, COMEDY etc)"]
