import React, { useState } from "react";

function Form(props) {
  const [movieTitle, setMovieTitle] = useState("");
  function handleInput(e) {
    setMovieTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(movieTitle);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieTitle">Title</label>
      <input
        id="movieTitle"
        type="text"
        value={movieTitle}
        onChange={handleInput}
      />
      <button type="submit">Find Movie</button>
    </form>
  );
}

export default Form;
