import React from 'react';

function MoviePoster(props) {
    let movieDetails;
    if (!props.posterUrl) {
        movieDetails = ".";
    } else {
        movieDetails = <div className="displayedMovieInfo"><h2>{props.movieTitle}</h2><h3>{props.movieYear}</h3><img src={props.posterUrl}></img></div>
    }

    return(
       <div>
           {movieDetails}
       </div>
    );

}

// <div className="posterSpace">
// <MovieInfo poster={this.props.movie.Poster}/>
// </div>

export default MoviePoster;