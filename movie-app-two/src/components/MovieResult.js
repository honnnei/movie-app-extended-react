import React from 'react';

function MovieResult(props) {
    console.log(props.movie)
    return(
        <div className="movie_result">
            <h1>{props.movie.Title}</h1>
            <h3>{props.movie.Year}</h3>
            <img src={props.movie.Poster}></img>
        </div>
    );

}

export default MovieResult;