import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieElements=movies.map((movie)=>
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre, index)=>
            <li key={index}>{genre}</li>
          )}
        </ul>
    </div>
  )
  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {movieElements}
  </div>;
}

export default Movies;
