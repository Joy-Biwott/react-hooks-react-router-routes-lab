import React from "react";
import { directors } from "../data";

function Directors() {
  const directorElements=directors.map((director)=> 
      <div key={director.name}>
        <h3>{director.name}</h3>
       
        <ul>
          {director.movies.map((movie, index)=>
            <li key={index}>{movie}</li>
          )}
        </ul>
      </div>)
    
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directorElements}
  </div>;
}

export default Directors;
