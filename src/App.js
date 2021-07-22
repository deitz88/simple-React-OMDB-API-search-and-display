import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "./Form";
import MovieInfo from "./MovieInfo";

export default function App() {
  const [movieTitle, setMovieTitle] = useState("Last Jedi");
  const [currentMovie, setCurrentMovie] = useState({});
  console.log(currentMovie);

  useEffect(() => {
    //this is endpoint for fetch call
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=3a782c14`;
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        setCurrentMovie(data);
      });
  }, [movieTitle]);
  // console.log(currentMovie)

  function handleSubmit(title) {
    setMovieTitle(title);
  }
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <MovieInfo currentMovie={currentMovie} />
    </div>
  );
}
