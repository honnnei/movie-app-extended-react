import React from 'react';

function MoviePoster(props) {
    let image;
    if (!props.posterUrl) {
        image = "Image loading!";
    } else {
        image = <img src={props.posterUrl}></img>
    }

    return(
       <div>
           {image}
       </div>
    );

}

// <div className="posterSpace">
// <MovieInfo poster={this.props.movie.Poster}/>
// </div>

export default MoviePoster;