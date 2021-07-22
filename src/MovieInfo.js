import React from "react";

function MovieInfo({ currentMovie }) {
  // console.log(currentMovie)
  return (
    <>
      <h1> Movie Info</h1>
      <div>
        <ul>
          <li>Title: {currentMovie.Title}</li>
          <li>Year: {currentMovie.Year}</li>
          <li>Rated: {currentMovie.Rated}</li>
          <li>Released: {currentMovie.Released}</li>
          <li>Runtime: {currentMovie.Runtime}</li>
        </ul>
        <img src={currentMovie.Poster} alt=".." />
        <ul>
          <li>Plot: {currentMovie.Plot}</li>
        </ul>
      </div>
    </>
  );
}

export default MovieInfo;
