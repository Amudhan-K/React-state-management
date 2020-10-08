import React,{ useState, useContext } from 'react';
import Movie from "./Movie";
import { MovieContext } from './MovieContext';

// creating a component of movielist
const MovieList=() =>{
   const [Movies,setMovies]=useContext(MovieContext);
    return (
        <div>
            
            {Movies.map(movie=> (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
    );
};
export default MovieList;
